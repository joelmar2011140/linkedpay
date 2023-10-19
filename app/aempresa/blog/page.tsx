import Image from 'next/image'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedPay | Blog',
  description: 'LinkedPay é uma carteira digital rápida e segura de Angola. Baixe agora para gerenciar suas finanças diretamente do seu celular.',
  keywords: ['Carteira digital angolana', 'Aplicativo de finanças', 'Pagamentos móveis', 'Transferência de dinheiro instantânea', 'Gerenciador financeiro móvel', 'App de pagamento seguro', 'Banco móvel em Angola', 'erviço de pagamento online', 'Dinheiro eletrônico em Angola', 'Mobilidade financeira em Angola']
}


export default function PaginaBlog() {
  return (
   <>
   <div className="text-center ">
        <h1 className="text-3xl md:text-4xl text-gray-500 font-bold">Blog LinkedPay</h1>
      </div>
      <div className="flex w-10/12 h-84  flex-col md:flex-row justify-center items-center mx-auto p-6  bg-slate-50 mb-12">
        <div className="flex flex-col md:flex-row justify-start gap-4 items-center w-full md:w-1/2 mb-4">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-lg font-bold mb-2">Venha conhecer-nos na FILDA 2023</h2>
            <h2 className="text-lg font-bold mb-2">De 18 a 22 de Julho</h2>
            {/* <p className="text-sm">Já fez planos para o longo fim-de-semana da Páscoa? Estamos certos de que está ansioso por passar tempo de qualidade com os seus entes queridos.</p> */}
          </div>
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <Image width={50} height={50} src='/images/FILDA_2023.jpg' className="w-full h-auto" alt='Linked pay blog' />
          </div>
        </div>
      </div>
   </>
  )
}
