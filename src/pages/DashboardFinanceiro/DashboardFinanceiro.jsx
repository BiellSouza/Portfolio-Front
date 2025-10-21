import React, { useEffect, useMemo, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dashboard.jsx
// React + Tailwind responsive dashboard implementing:
// - Insert / Edit / Delete transactions (income = receita, expense = despesa)
// - Top cards: current value, total expense, last income date, last expense date
// - Chart with green line (income), red line (expense), white line (current balance)
// - History list with colored tags
// - Search bar (by name or date) and left sidebar with Download button (CSV)
// - Transactions persisted to localStorage so data survives reloads

// NOTE: This component uses `recharts` for charts and Tailwind for styling.
// Make sure to have both installed and Tailwind configured in your project.

const STORAGE_KEY = "dashboard_transactions_v1";

function formatCurrency(v) {
  return v.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

export default function DashboardFinanceiro() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  // modal state
  const [mode, setMode] = useState(null); // 'insert' | 'edit' | 'delete' | null
  const [open, setOpen] = useState(false);

  // form state
  const [form, setForm] = useState({
    id: null,
    name: "",
    amount: "",
    type: "income",
    date: "",
  });
  const [selectedId, setSelectedId] = useState(null); // used in edit/delete to pick transaction

  // load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTransactions(JSON.parse(raw));
    } catch (e) {
      console.error(e);
    }
  }, []);

  // persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  // derived calculations
  const totalIncome = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "income")
        .reduce((s, t) => s + Number(t.amount), 0),
    [transactions]
  );
  const totalExpense = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "expense")
        .reduce((s, t) => s + Number(t.amount), 0),
    [transactions]
  );
  const currentValue = useMemo(
    () => totalIncome - totalExpense,
    [totalIncome, totalExpense]
  );

  const lastIncomeDate = useMemo(() => {
    const last = [...transactions]
      .filter((t) => t.type === "income")
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))[0];
    return last ? new Date(last.date) : null;
  }, [transactions]);
  const lastExpenseDate = useMemo(() => {
    const last = [...transactions]
      .filter((t) => t.type === "expense")
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))[0];
    return last ? new Date(last.date) : null;
  }, [transactions]);

  // chart data: aggregate per day of current month
  const chartData = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const dim = daysInMonth(year, month);
    const base = Array.from({ length: dim }, (_, i) => {
      const day = i + 1;
      const dateKey = new Date(year, month, day).toISOString().slice(0, 10);
      return { date: dateKey.slice(8), income: 0, expense: 0, balance: 0 };
    });

    let running = 0;
    // sort transactions by date
    const sorted = [...transactions].sort(
      (a, b) => +new Date(a.date) - +new Date(b.date)
    );

    const sumsByDay = {};
    sorted.forEach((t) => {
      const d = t.date.slice(0, 10);
      if (!sumsByDay[d]) sumsByDay[d] = { income: 0, expense: 0 };
      if (t.type === "income") sumsByDay[d].income += Number(t.amount);
      else sumsByDay[d].expense += Number(t.amount);
    });

    for (let i = 0; i < base.length; i++) {
      const dt = new Date(year, month, i + 1).toISOString().slice(0, 10);
      const s = sumsByDay[dt] || { income: 0, expense: 0 };
      running += s.income - s.expense;
      base[i].income = s.income;
      base[i].expense = s.expense;
      base[i].balance = running;
    }

    return base;
  }, [transactions]);

  // percentage of month passed
  const monthProgress = useMemo(() => {
    const now = new Date();
    const dim = daysInMonth(now.getFullYear(), now.getMonth());
    return Math.min(100, Math.round((now.getDate() / dim) * 100 * 100) / 100);
  }, [transactions]);

  // filtered history
  const visibleTransactions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q)
      return [...transactions].sort(
        (a, b) => +new Date(b.date) - +new Date(a.date)
      );
    return transactions
      .filter((t) => t.name.toLowerCase().includes(q) || t.date.includes(q))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, [transactions, query]);

  // helpers
  function openModal(mode) {
    setMode(mode);
    setForm({ id: null, name: "", amount: "", type: "income", date: "" });
    setSelectedId(null);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setMode(null);
    setSelectedId(null);
  }

  function handleInsertSubmit(e) {
    e.preventDefault();
    const nowIso = new Date().toISOString();
    const t = {
      id: "t_" + Date.now(),
      name: form.name || (form.type === "income" ? "Receita" : "Despesa"),
      amount: Number(form.amount) || 0,
      type: form.type,
      date: nowIso,
    };
    setTransactions((prev) => [...prev, t]);
    closeModal();
  }

  function handlePickForEdit(id) {
    const t = transactions.find((x) => x.id === id);
    if (!t) return;
    setForm({
      id: t.id,
      name: t.name,
      amount: String(t.amount),
      type: t.type,
      date: t.date,
    });
    setSelectedId(id);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    setTransactions((prev) =>
      prev.map((p) =>
        p.id === form.id
          ? {
              ...p,
              name: form.name,
              amount: Number(form.amount),
              type: form.type,
            }
          : p
      )
    );
    closeModal();
  }

  function handleDeleteConfirm() {
    if (!selectedId) return;
    setTransactions((prev) => prev.filter((p) => p.id !== selectedId));
    closeModal();
  }

  function downloadCSV() {
    const headers = ["id", "name", "amount", "type", "date"];
    const rows = transactions.map((t) => [
      t.id,
      t.name,
      t.amount,
      t.type,
      t.date,
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dashboard_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-[#081014] text-white p-4 md:p-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="bg-[#071014] rounded-2xl p-4 flex flex-col gap-4">
          <div className="text-2xl font-bold text-emerald-400">Dashboard</div>
          <div className="flex-1" />
          <button
            onClick={downloadCSV}
            className="w-full py-2 rounded-lg bg-emerald-600/80 hover:bg-emerald-600"
          >
            Download
          </button>
          <div className="text-xs text-zinc-400 mt-2">
            Versão local - dados armazenados no navegador
          </div>
        </aside>

        {/* Main */}
        <main className="space-y-6">
          {/* Top bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="bg-[#0b1b1a] rounded-xl px-4 py-3 shadow-inner">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pesquisar por nome ou data (YYYY-MM-DD)"
                  className="bg-transparent outline-none placeholder:zinc-500 w-64"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openModal("insert")}
                  className="px-4 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-500"
                >
                  Inserir
                </button>
                <button
                  onClick={() => openModal("edit")}
                  className="px-4 py-2 rounded-md bg-yellow-600/90 hover:bg-yellow-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => openModal("delete")}
                  className="px-4 py-2 rounded-md bg-red-600/90 hover:bg-red-600"
                >
                  Deletar
                </button>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="text-zinc-400 text-sm">Usuário</div>
              <div className="h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center">
                G
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#0b1b1a] rounded-xl p-4">
              <div className="text-sm text-zinc-400">New Subscribers</div>
              <div className="text-2xl font-bold text-emerald-400">
                {formatCurrency(currentValue)}
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Total atual (receitas - despesas)
              </div>
            </div>

            <div className="bg-[#0b1b1a] rounded-xl p-4">
              <div className="text-sm text-zinc-400">Streams (Despesas)</div>
              <div className="text-2xl font-bold text-red-400">
                {formatCurrency(totalExpense)}
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Soma de todas as despesas no mês
              </div>
            </div>

            <div className="bg-[#0b1b1a] rounded-xl p-4">
              <div className="text-sm text-zinc-400">Engagement Rate</div>
              <div className="text-2xl font-bold text-zinc-200">
                {lastIncomeDate ? lastIncomeDate.toLocaleString() : "-"}
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Última atualização de receita
              </div>
            </div>

            <div className="bg-[#0b1b1a] rounded-xl p-4">
              <div className="text-sm text-zinc-400">Avg. watch time</div>
              <div className="text-2xl font-bold text-zinc-200">
                {lastExpenseDate ? lastExpenseDate.toLocaleString() : "-"}
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Última atualização de despesa
              </div>
            </div>
          </div>

          {/* Mid area: chart + right panel */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
            <div className="bg-[#071318] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">Audience</div>
                <div className="text-sm text-zinc-400">
                  {formatCurrency(currentValue)}
                </div>
              </div>

              <div style={{ height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid stroke="#0b2a2a" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="income"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="expense"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="balance"
                      stroke="#ffffff"
                      strokeWidth={2.5}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4">
                <div className="text-sm text-zinc-400">
                  Popular Episodes / Histórico
                </div>
                <div className="mt-2 grid gap-2">
                  {visibleTransactions.slice(0, 5).map((t) => (
                    <div
                      key={t.id}
                      className="p-2 rounded-lg bg-[#0b1b1a] flex justify-between items-center"
                    >
                      <div>
                        <div className="font-medium">{t.name}</div>
                        <div className="text-xs text-zinc-400">
                          {new Date(t.date).toLocaleString()}
                        </div>
                      </div>
                      <div
                        className={`font-semibold ${
                          t.type === "income"
                            ? "text-emerald-400"
                            : "text-red-400"
                        }`}
                      >
                        {t.type === "income" ? "+" : "-"}{" "}
                        {formatCurrency(t.amount)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#071318] rounded-2xl p-4 flex flex-col gap-4">
              <div className="font-semibold">Audience satisfaction</div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border-2 border-emerald-400 flex items-center justify-center text-2xl font-bold">
                  {monthProgress}%
                </div>
              </div>

              <div className="text-sm text-zinc-400">
                Learn how you can earn more then 20% each month!
              </div>
            </div>
          </div>

          {/* History full list */}
          <div className="bg-[#071318] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold">Histórico completo</div>
              <div className="text-sm text-zinc-400">
                {visibleTransactions.length} registros
              </div>
            </div>
            <div className="grid gap-2">
              {visibleTransactions.map((t) => (
                <div
                  key={t.id}
                  className="p-3 rounded-lg bg-[#0b1b1a] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        t.type === "income" ? "bg-emerald-400" : "bg-red-400"
                      }`}
                    />
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-xs text-zinc-400">
                        {new Date(t.date).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`font-semibold ${
                      t.type === "income" ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {t.type === "income" ? "+" : "-"} {formatCurrency(t.amount)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Modal area */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#061215] rounded-xl w-full max-w-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-bold text-lg">
                {mode === "insert" && "Inserir registro"}
                {mode === "edit" && "Editar registro"}
                {mode === "delete" && "Deletar registro"}
              </div>
              <button onClick={closeModal} className="text-zinc-400">
                Fechar
              </button>
            </div>

            {/* Insert */}
            {mode === "insert" && (
              <form onSubmit={handleInsertSubmit} className="space-y-3">
                <div>
                  <label className="text-sm text-zinc-400">Nome</label>
                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full bg-transparent border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-zinc-400">Valor</label>
                  <input
                    value={form.amount}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, amount: e.target.value }))
                    }
                    type="number"
                    step="0.01"
                    className="w-full bg-transparent border rounded p-2 mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-zinc-400">Tipo</label>
                  <select
                    value={form.type}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, type: e.target.value }))
                    }
                    className="w-full bg-transparent border rounded p-2 mt-1"
                  >
                    <option value="income">Receita</option>
                    <option value="expense">Despesa</option>
                  </select>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded bg-zinc-600"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-emerald-500"
                  >
                    Inserir
                  </button>
                </div>
              </form>
            )}

            {/* Edit */}
            {mode === "edit" && (
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-zinc-400">
                    Escolha um registro para editar
                  </label>
                  <select
                    onChange={(e) => handlePickForEdit(e.target.value)}
                    className="w-full bg-transparent border rounded p-2 mt-1"
                  >
                    <option value="">-- selecionar --</option>
                    {transactions.map((t) => (
                      <option key={t.id} value={t.id}>{`${
                        t.name
                      } - ${t.date.slice(0, 10)} - ${
                        t.type === "income" ? "+" : "-"
                      }${formatCurrency(t.amount)}`}</option>
                    ))}
                  </select>
                </div>

                {selectedId && (
                  <form onSubmit={handleEditSubmit} className="space-y-3">
                    <div>
                      <label className="text-sm text-zinc-400">Nome</label>
                      <input
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full bg-transparent border rounded p-2 mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-zinc-400">Valor</label>
                      <input
                        value={form.amount}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, amount: e.target.value }))
                        }
                        type="number"
                        step="0.01"
                        className="w-full bg-transparent border rounded p-2 mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-zinc-400">Tipo</label>
                      <select
                        value={form.type}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, type: e.target.value }))
                        }
                        className="w-full bg-transparent border rounded p-2 mt-1"
                      >
                        <option value="income">Receita</option>
                        <option value="expense">Despesa</option>
                      </select>
                    </div>

                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-4 py-2 rounded bg-zinc-600"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded bg-yellow-600"
                      >
                        Salvar
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Delete */}
            {mode === "delete" && (
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-zinc-400">
                    Escolha um registro para deletar
                  </label>
                  <select
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="w-full bg-transparent border rounded p-2 mt-1"
                  >
                    <option value="">-- selecionar --</option>
                    {transactions.map((t) => (
                      <option key={t.id} value={t.id}>{`${
                        t.name
                      } - ${t.date.slice(0, 10)} - ${
                        t.type === "income" ? "+" : "-"
                      }${formatCurrency(t.amount)}`}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded bg-zinc-600"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    disabled={!selectedId}
                    onClick={handleDeleteConfirm}
                    className="px-4 py-2 rounded bg-red-600"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
