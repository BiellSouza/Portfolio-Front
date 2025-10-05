import { Phone, Mail, MapPin } from "lucide-react";

export default function FormContact() {
  return (
    <section className="text-white py-[96px]">
      <div className=" mx-auto w-full flex justify-between">
        {/* FORMULÁRIO */}
        <div className="bg-white/5 w-[610px] flex flex-col p-8 rounded-md">
          <h2 className="text-[40px] text-secondary">Vamos trabalhar juntos</h2>
          <p className="text-gray-400 mt-8 leading-relaxed">
            Preenchendo esse formulário as informações irão direto para o meu
            WhatsApp.
          </p>
          <form action="" className="mt-9">
            <div className="grid grid-flow-row grid-cols-2 gap-4">
              <input
                className="bg-[#0d0d0f] border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none"
                type="text"
                placeholder="Nome"
              />
              <input
                className="bg-[#0d0d0f] border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none"
                type="text"
                placeholder="Sobrenome"
              />
            </div>

            <div className="grid grid-flow-row grid-cols-2 gap-4 mt-6">
              <input
                className="bg-[#0d0d0f] border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none"
                type="email"
                placeholder="Email de contato"
              />
              <input
                className="bg-[#0d0d0f] border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none"
                type="tel"
                placeholder="Número de celular"
              />
            </div>

            <div className="flex flex-col mt-6">
              {" "}
              <div className="flex flex-col">
                {/* <div className="relative w-full">
                  <select
                    name="service"
                    defaultValue=""
                    id="service"
                    className="appearance-none bg-[#0d0d0f] border border-gray-700 text-gray-400 px-4 py-3 rounded-md focus:outline-none w-full"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Logo Design</option>
                    <option>SEO Optimization</option>
                  </select>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down-icon lucide-chevron-down"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div> */}
                <textarea
                  className="bg-[#0d0d0f] min-h-[200px] border border-gray-700 text-white px-4 py-3 rounded-md resize-none focus:outline-none mt-6"
                  name=""
                  id=""
                  placeholder="Type your message here."
                ></textarea>
              </div>
              <div className="mt-6">
                <button className="py-3 px-6 font-bold bg-secondary rounded-full text-primary cursor-pointer hover:scale-105 transition-all duration-300">
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* INFORMAÇÕES DE CONTATO */}
        <div className="flex flex-col justify-center items-start w-[35%] gap-12">
          <div className="flex items-center gap-4">
            <div className="bg-green-400/10 text-green-400 p-4 rounded-lg">
              <Phone />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Meu Número</p>
              <p className="font-medium">(+21) 97261 - 3067</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-400/10 text-green-400 p-4 rounded-lg">
              <Mail />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-medium">gabrielsouza65115@gmail.com</p>
            </div>
          </div>

          {/* <div className="flex items-center gap-4">
            <div className="bg-green-400/10 text-green-400 p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <p className="font-medium">
                www.linkedin.com/in/gabriel-souza-b9945929a
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
