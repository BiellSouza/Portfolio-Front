import React, { useEffect, useState, useRef } from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

// DashboardFinanceiroDark.jsx
// Single-file React component using TailwindCSS + react-chartjs-2
// Persistência: localStorage
// Auto-refresh: re-reads dados a cada 10s e recalcula tudo

const LS_KEY = "df_local_data_v1";

const defaultData = {
  transactions: [
    {
      id: "t1",
      name: "Salário",
      amount: 11600,
      type: "receita",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t2",
      name: "Aluguel",
      amount: 5130,
      type: "despesa",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t3",
      name: "Supermercado",
      amount: 2776,
      type: "despesa",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t4",
      name: "Lazer",
      amount: 800,
      type: "despesa",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t5",
      name: "Investimentos",
      amount: 2000,
      type: "receita",
      createdAt: new Date().toISOString(),
    },
  ],
};

function uid(prefix = "id") {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}

export default function DashboardFinanceiroDark() {
  const [state, setState] = useState(() => {
    try {
      const s = localStorage.getItem(LS_KEY);
      return s ? JSON.parse(s) : defaultData;
    } catch (e) {
      return defaultData;
    }
  });

  const [form, setForm] = useState({ name: "", amount: "", type: "despesa" });
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    amount: "",
    type: "despesa",
  });
  const [now, setNow] = useState(Date.now());
  const intervalRef = useRef(null);

  // Keep derived values
  const transactions = state.transactions || [];
  const income = transactions
    .filter((t) => t.type === "receita")
    .reduce((a, b) => a + Number(b.amount), 0);
  const expense = transactions
    .filter((t) => t.type === "despesa")
    .reduce((a, b) => a + Number(b.amount), 0);
  const balance = income - expense;

  // Split fixed vs variable example heuristic (for visual parity with image)
  // We'll treat items with name containing common 'fix' words as fixed
  const fixedKeywords = [
    "aluguel",
    "condom",
    "condomínio",
    "internet",
    "telefone",
    "energia",
  ];
  const fixed = transactions
    .filter(
      (t) =>
        t.type === "despesa" &&
        fixedKeywords.some((k) => t.name.toLowerCase().includes(k))
    )
    .reduce((a, b) => a + Number(b.amount), 0);
  const variable = expense - fixed;

  // Save to localStorage
  const persist = (nextState) => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(nextState));
      setState(nextState);
    } catch (e) {
      console.error("Persist error", e);
    }
  };

  // Add transaction
  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount) return;
    const t = {
      id: uid("t"),
      name: form.name,
      amount: Number(form.amount),
      type: form.type,
      createdAt: new Date().toISOString(),
    };
    persist({ ...state, transactions: [...transactions, t] });
    setForm({ name: "", amount: "", type: "despesa" });
  };

  // Start edit
  const startEdit = (t) => {
    setEditId(t.id);
    setEditForm({ name: t.name, amount: String(t.amount), type: t.type });
  };

  const submitEdit = () => {
    if (!editForm.name || !editForm.amount) return;
    const next = state.transactions.map((t) =>
      t.id === editId
        ? {
            ...t,
            name: editForm.name,
            amount: Number(editForm.amount),
            type: editForm.type,
          }
        : t
    );
    persist({ ...state, transactions: next });
    setEditId(null);
  };

  const handleDelete = (id) => {
    const next = state.transactions.filter((t) => t.id !== id);
    persist({ ...state, transactions: next });
  };

  // Auto-refresh: re-read from localStorage every 10s and update "now" to trigger recalcs/animations
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      try {
        const s = localStorage.getItem(LS_KEY);
        if (s) {
          const parsed = JSON.parse(s);
          setState(parsed);
        }
      } catch (e) {
        console.error(e);
      }
      setNow(Date.now());
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Charts data
  const incomeExpenseData = {
    labels: ["Receitas", "Despesas"],
    datasets: [
      {
        data: [income || 0, expense || 0],
        backgroundColor: ["#ef4444", "#111827"],
        hoverOffset: 6,
      },
    ],
  };

  const paretoTransactions = transactions
    .filter((t) => t.type === "despesa")
    .sort((a, b) => b.amount - a.amount);
  const paretoData = {
    labels: paretoTransactions.map((p) => p.name).slice(0, 8),
    datasets: [
      {
        label: "Despesas",
        data: paretoTransactions.map((p) => p.amount).slice(0, 8),
        backgroundColor: [
          "#f87171",
          "#fb923c",
          "#fbbf24",
          "#60a5fa",
          "#a78bfa",
          "#34d399",
          "#ef4444",
          "#9ca3af",
        ],
      },
    ],
  };

  // Small time-ordered line data (sum over time grouped by month-year)
  const groupedByMonth = () => {
    const map = {};
    transactions.forEach((t) => {
      const d = new Date(t.createdAt);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0"
      )}`;
      if (!map[key]) map[key] = { income: 0, expense: 0 };
      if (t.type === "receita") map[key].income += Number(t.amount);
      else map[key].expense += Number(t.amount);
    });
    const keys = Object.keys(map).sort();
    return {
      labels: keys,
      incomes: keys.map((k) => map[k].income),
      expenses: keys.map((k) => map[k].expense),
    };
  };

  const monthly = groupedByMonth();
  const lineData = {
    labels: monthly.labels,
    datasets: [
      {
        label: "Receitas",
        data: monthly.incomes,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
      {
        label: "Despesas",
        data: monthly.expenses,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  // Helpers for progress rings
  const percentExpenseOfIncome = income
    ? Math.round((expense / income) * 100)
    : 0;
  const percentFixed = expense ? Math.round((fixed / expense) * 100) : 0;
  const percentVariable = expense ? Math.round((variable / expense) * 100) : 0;

  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black/80 p-6 flex-shrink-0">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-black font-bold">
            GF
          </div>
          <div>
            <h3 className="text-lg font-semibold">Gestão Financeira</h3>
            <p className="text-sm text-gray-400">Pessoal</p>
          </div>
        </div>

        <nav className="space-y-2 text-sm">
          <button className="w-full text-left px-3 py-2 rounded-md bg-red-700/30 flex items-center gap-3">
            <span className="w-3 h-3 bg-red-500 rounded-sm" /> Dashboard
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 flex items-center gap-3">
            Cadastro
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 flex items-center gap-3">
            Cálculo
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5 flex items-center gap-3">
            Configurações
          </button>
        </nav>

        <div className="mt-8 border-t border-white/5 pt-4 text-sm text-gray-400">
          <p>Atualizar: a cada 10s</p>
          <p className="mt-2">
            Última leitura: {new Date(now).toLocaleTimeString()}
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            Dashboard Financeiro
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-gray-400">Saldo</div>
              <div
                className={`text-2xl font-bold ${
                  balance >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                R$ {balance.toFixed(2)}
              </div>
            </div>
            <button className="bg-red-600 px-3 py-2 rounded-md text-black font-semibold">
              Sair
            </button>
          </div>
        </header>

        {/* Top cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#0b0b0b] rounded-2xl p-5 shadow-md flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Rendas</div>
              <div className="text-2xl font-bold text-white">
                R$ {income.toFixed(2)}
              </div>
            </div>
            <div className="w-20 h-20 relative">
              <div className="absolute inset-0 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-20 h-20">
                  <path
                    className="text-gray-700"
                    d="M18 2a16 16 0 1 0 0 32 16 16 0 0 0 0-32z"
                    fill="#111827"
                  />
                  <path
                    d="M18 2a16 16 0 0 1 0 32"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2.8"
                    strokeDasharray={`${Math.min(
                      100,
                      percentExpenseOfIncome
                    )} ${100 - Math.min(100, percentExpenseOfIncome)}`}
                    transform="rotate(-90 18 18)"
                  />
                  <text
                    x="18"
                    y="20"
                    fontSize="6"
                    textAnchor="middle"
                    fill="#fff"
                  >
                    {percentExpenseOfIncome}%
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#0b0b0b] rounded-2xl p-5 shadow-md flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Despesas</div>
              <div className="text-2xl font-bold text-white">
                R$ {expense.toFixed(2)}
              </div>
            </div>
            <div className="w-20 h-20 relative">
              <div className="absolute inset-0 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-20 h-20">
                  <path
                    d="M18 2a16 16 0 1 0 0 32 16 16 0 0 0 0-32z"
                    fill="#111827"
                  />
                  <path
                    d="M18 2a16 16 0 0 1 0 32"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2.8"
                    strokeDasharray="60 40"
                    transform="rotate(-90 18 18)"
                  />
                  <text
                    x="18"
                    y="20"
                    fontSize="6"
                    textAnchor="middle"
                    fill="#fff"
                  >
                    {expense ? Math.round((expense / (income || 1)) * 100) : 0}%
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#0b0b0b] rounded-2xl p-5 shadow-md">
            <div className="text-sm text-gray-400">Despesas Fixas</div>
            <div className="text-2xl font-bold text-white">
              R$ {fixed.toFixed(2)}
            </div>
            <div className="text-sm text-gray-400 mt-1">{percentFixed}%</div>
          </div>

          <div className="bg-[#0b0b0b] rounded-2xl p-5 shadow-md">
            <div className="text-sm text-gray-400">Despesas Variadas</div>
            <div className="text-2xl font-bold text-white">
              R$ {variable.toFixed(2)}
            </div>
            <div className="text-sm text-gray-400 mt-1">{percentVariable}%</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left large panel - line chart + table */}
          <div className="bg-[#0b0b0b] rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4">
              Relação entre Rendas x Despesas
            </h3>
            <div className="mb-6">
              <Line data={lineData} />
            </div>

            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-md font-semibold">Lançamentos</h4>
              <div className="text-sm text-gray-400">
                Total: {transactions.length}
              </div>
            </div>

            <div className="overflow-x-auto max-h-64">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-400">
                    <th className="pb-2">Descrição</th>
                    <th className="pb-2">Valor</th>
                    <th className="pb-2">Tipo</th>
                    <th className="pb-2">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t) => (
                    <tr key={t.id} className="border-t border-white/5">
                      <td className="py-2">{t.name}</td>
                      <td className="py-2">R$ {Number(t.amount).toFixed(2)}</td>
                      <td className="py-2">{t.type}</td>
                      <td className="py-2 flex gap-2">
                        <button
                          onClick={() => startEdit(t)}
                          className="px-2 py-1 bg-yellow-500 rounded text-black"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(t.id)}
                          className="px-2 py-1 bg-red-600 rounded text-black"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add / Edit form */}
            <form
              onSubmit={handleAdd}
              className="mt-4 flex flex-col md:flex-row gap-3"
            >
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Descrição"
                className="p-2 rounded bg-white/5 flex-1"
              />
              <input
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                placeholder="Valor"
                type="number"
                className="p-2 rounded bg-white/5 w-32"
              />
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="p-2 rounded bg-white/5"
              >
                <option value="despesa">Despesa</option>
                <option value="receita">Receita</option>
              </select>
              <button type="submit" className="px-4 py-2 bg-green-500 rounded">
                Adicionar
              </button>
            </form>

            {editId && (
              <div className="mt-4 p-3 bg-white/5 rounded">
                <div className="mb-2 font-semibold">Editando</div>
                <div className="flex gap-2">
                  <input
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                    className="p-2 rounded bg-black/30 flex-1"
                  />
                  <input
                    value={editForm.amount}
                    onChange={(e) =>
                      setEditForm({ ...editForm, amount: e.target.value })
                    }
                    className="p-2 rounded bg-black/30 w-28"
                  />
                  <select
                    value={editForm.type}
                    onChange={(e) =>
                      setEditForm({ ...editForm, type: e.target.value })
                    }
                    className="p-2 rounded bg-black/30"
                  >
                    <option value="despesa">Despesa</option>
                    <option value="receita">Receita</option>
                  </select>
                  <button
                    onClick={submitEdit}
                    className="px-3 py-1 bg-blue-500 rounded"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="px-3 py-1 bg-gray-500 rounded"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right large panel - pareto / bars */}
          <div className="bg-[#0b0b0b] rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4">Despesas Relevantes</h3>
            <div className="mb-6" style={{ height: 300 }}>
              <Bar data={paretoData} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/50 p-4 rounded">
                <div className="text-sm text-gray-400">Fixas</div>
                <div className="text-xl font-bold">R$ {fixed.toFixed(2)}</div>
                <div className="text-xs text-gray-400">
                  {percentFixed}% do total
                </div>
              </div>
              <div className="bg-black/50 p-4 rounded">
                <div className="text-sm text-gray-400">Variadas</div>
                <div className="text-xl font-bold">
                  R$ {variable.toFixed(2)}
                </div>
                <div className="text-xs text-gray-400">
                  {percentVariable}% do total
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              Dica: edite os lançamentos à esquerda. O painel atualiza
              automaticamente a cada 10s ou quando você
              adicionar/editar/excluir.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
