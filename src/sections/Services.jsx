import ServiceCard from "../components/ServiceCard";

export default function Service() {
  const services = [
    {
      number: "01",
      title: "Landing Pages Interativas",
      description:
        "Desenvolvi páginas modernas e responsivas com React e Tailwind CSS, aplicando animações suaves e seções dinâmicas para melhorar a experiência do usuário.",
      active: true,
    },
    {
      number: "02",
      title: "Componentes Personalizados",
      description:
        "Criei componentes reutilizáveis como carrosséis, formulários e barras de progresso, utilizando React e bibliotecas como Ant Design e Material UI.",
    },
    {
      number: "03",
      title: "Integração com EmailJS",
      description:
        "Implementei formulários de contato funcionais conectados ao EmailJS, permitindo o envio automático de mensagens direto para o e-mail do cliente.",
    },
    {
      number: "04",
      title: "Design Responsivo e Temas",
      description:
        "Desenvolvi interfaces adaptáveis para diferentes tamanhos de tela e implementei sistemas de temas com modo claro e escuro usando Tailwind CSS.",
    },
  ];

  return (
    <section className=" text-white py-[96px] ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </section>
  );
}
