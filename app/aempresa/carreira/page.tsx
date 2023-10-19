import SobreNos from '../../../src/components/AEmpresa/SobreNos/SobreNos'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedPay | Carreiras',
  description: 'LinkedPay é uma carteira digital rápida e segura de Angola. Baixe agora para gerenciar suas finanças diretamente do seu celular.',
  keywords: ['Carteira digital angolana', 'Aplicativo de finanças', 'Pagamentos móveis', 'Transferência de dinheiro instantânea', 'Gerenciador financeiro móvel', 'App de pagamento seguro', 'Banco móvel em Angola', 'erviço de pagamento online', 'Dinheiro eletrônico em Angola', 'Mobilidade financeira em Angola']
}


export default function PaginaCarreiras() {
  return (
    <div className="mb-22 min-h-screen w-10/12 mx-auto flex flex-col justify-center items-center">
    <div className="text-center mb-4">
      <h1 className="text-3xl md:text-4xl text-gray-500 font-bold">Trabalhar com propósito</h1>
    </div>
    <div className="flex flex-col w-full items-center mb-4">
      <div className="w-full text-center lg:w-1/2 mb-4">
        <p className="mb-2 text-base md:text-lg">Junte-se a nós para construir um novo futuro financeiro em África.</p>
        <p className="mb-2">Estamos à procura de estrelas em ascensão que queiram fazer a diferença
        e que ambicionam crescer profissionalmente.</p>
      </div>
    </div>
    <div className="text-center mt-4 mb-4">
      <h2 className="text-2xl text-gray-500 font-bold mb-4">Porquê escolher-nos</h2>
    </div>
    <div className="flex flex-wrap w-full justify-center">
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-500 rounded-full mb-4"></div>
          <h3 className="text-lg text-gray-500 font-bold">Profissionais</h3>
          <p className="text-sm text-center">Oferecemos á oportunidade de uma carreira profissional promissora numa área inovadora como as fintechs.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-500 rounded-full mb-4"></div>
          <h3 className="text-lg text-gray-500 font-bold">Resposta rápida</h3>
          <p className="text-sm text-center">Dinâmicos e objectivos com resposta rápida.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-500 rounded-full mb-4"></div>
          <h3 className="text-lg text-gray-500 font-bold">Futuro</h3>
          <p className="text-sm text-center">Junte-se a nós para moldar o futuro das Fintechs.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-500 rounded-full mb-4"></div>
          <h3 className="text-lg text-gray-500 font-bold">Inovação</h3>
          <p className="text-sm text-center">O desenvolvimento de sistemas seguros e benéficos requer pessoas intelectualmente capazes.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
