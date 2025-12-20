import React, { useState } from 'react'
import img1 from '../../../assets/Imagens/logoHtml.png'
import img2 from '../../../assets/Imagens/logoCss.png'
import img3 from '../../../assets/Imagens/logoJS.png'
import { ArrowBigUpIcon, Circle, Link, TriangleAlert } from 'lucide-react'
import { Dialog } from 'primereact/dialog'

function ExerciciosJS() {
  const [visible, setVisible] = useState(false)
  const [temaAtivo, setTemaAtivo] = useState(null)

  const temas = [
    {
      titulo: 'Hierarquia Visual',
      description: (
        <span>
          a Hierarquia Visual transmite a importância dos elementos. Minimizar a
          importância das informações menos relevantes aumenta a clareza.
        </span>
      ),
      importante: (
        <p className="flex gap-2 justify-between items-center">
          • Minimizar elementos menos importantes!{' '}
          <span>
            {' '}
            <TriangleAlert width={20} className="text-red-700" />
          </span>
        </p>
      ),
    },
    {
      titulo: 'Tamanho e Cor',
      description: (
        <span>
          evite usar apenas o tamanho da fonte para definir hierarquia . Use uma
          paleta de cores e contrastes limitados.
        </span>
      ),
      importante: (
        <span>
          <p className="flex gap-2 justify-between items-center">
            • Use o tamanho, espessura e cor da fonte para criar hierarquia.{' '}
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>
          <br />
          <p className="flex gap-2 justify-between items-center">
            {' '}
            • Use cores como (tons escuros para cor primária, cinza para cores
            secundárias, e cinza claro para cores terciárias).{' '}
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>
          <br />
          <p className="flex gap-2 justify-between items-center">
            • Limite os pesos da fonte a no máximo 2 ou 3 pesos.{' '}
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>{' '}
          </p>{' '}
          <br />
          <p className="flex gap-2 justify-between items-center">
            {' '}
            • Nunca use cinza em um fundo colorido (Verifique o contraste antes
            de aprovar).
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>
        </span>
      ),
    },
    {
      titulo: 'Enfatizando  através da Desvalorização',
      description: (
        <span>
          diminua a ênfase em elementos concorrentes para destacar os elementos
          principais. Permita a visibilidade do plano de fundo para mairo
          clareza.
        </span>
      ),
      importante: (
        <span>
          <p className="flex gap-2 justify-between items-center">
            • Reduza o destaque de elementos concorrentes.
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>

          <p className="flex gap-2 justify-between items-center">
            • Utilize o fundo para contrastar.
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>
        </span>
      ),
    },
    {
      titulo: 'Manuseio de Etiquetas',
      description: (
        <span>trate rótulos necessários como conteúdos secundários.</span>
      ),
      importante: (
        <span>
          <p className="flex gap-2 justify-between items-center">
            • Inferir resultado a partir do próprio formato.
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>

          <p className="flex gap-2 justify-between items-center">
            • Associe o valor oa contexto.
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>

          <p className="flex gap-2 justify-between items-center">
            • Em caso de descrições, escolha usar uma UI menor e com menos
            contraste.{' '}
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>
        </span>
      ),
    },
    {
      titulo: 'Equilibrando Peso e Contraste',
      description: (
        <span>
          o peso visual afeta a hierarquia. Use o contraste para equilibrar a
          proeminência dos elementos.
        </span>
      ),
      importante: (
        <span>
          <p className="flex gap-2 justify-between items-center">
            • Use contraste para equilibrar elementos pesados como ícones e
            textos.
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>
          <p className="flex gap-2 justify-between items-center">
            • Combine Peso e Contraste.
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>
        </span>
      ),
    },
    {
      titulo: 'Hierarquia das Ações',
      description: (
        <span>
          priorize organizar as ações com base na hierarquia. Ações primárias
          devem ser destacadas, ações destrutivas devem ser gerenciadas com
          etapas de confirmação.
        </span>
      ),
      importante: (
        <span>
          <p className="flex gap-2 justify-between items-center">
            • Ações primárias devem ser mais destacadas.
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>
          <p className="flex gap-2 justify-between items-center">
            • Ações destrutivas devem conter etapas de confirmação.{' '}
            <span>
              {' '}
              <TriangleAlert width={20} className="text-red-700" />
            </span>
          </p>
        </span>
      ),
    },
  ]

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="flex justify-center items-center border-2 border-white max-w-[700px] min-h-[300px] w-[90%] bg-white/10 p-10 rounded-xl">
        <div className="flex flex-col w-full gap-8">
          <h1 className="flex justify-center text-[32px]">
            Escolha uma opção para estudar:
          </h1>

          {/* <div className="flex justify-evenly w-full">
            <img
              src={img1}
              alt=""
              className="max-w-[100px] rounded-full border border-white p-2 hover:scale-110 hover:duration-300 transition-all hover:border-secondary cursor-pointer"
            />
            <img
              src={img2}
              alt=""
              className="max-w-[100px] rounded-full border border-white p-2 hover:scale-110 hover:duration-300 transition-all hover:border-secondary cursor-pointer"
            />
            <img
              src={img3}
              alt=""
              className="max-w-[100px] rounded-full border border-white p-2 hover:scale-110 hover:duration-300 transition-all hover:border-secondary cursor-pointer"
            />
          </div> */}
          {temas.map((topicos, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setVisible(true)
                  setTemaAtivo(topicos)
                }}
                className="underline w-fit flex gap-4 outline-none hover:text-secondary hover:duration-300 transition-all"
              >
                <span>
                  <Circle width={10} />
                </span>
                {topicos.titulo}
              </button>
            </div>
          ))}
        </div>{' '}
        <Dialog
          header={temaAtivo?.titulo}
          visible={visible}
          onHide={() => {
            if (!visible) return
            setVisible(false)
          }}
          style={{ width: '641px' }}
          breakpoints={{ '960px': '75vw', '641px': '100vw' }}
        >
          <p className="m-0 text-black/70 mb-4 first-letter:uppercase">
            {temaAtivo?.description}
          </p>
          <hr className="" />
          <p className="mt-8 text-black/70first-letter:uppercase ">
            {temaAtivo?.importante}
          </p>
        </Dialog>
      </div>
    </div>
  )
}

export default ExerciciosJS
