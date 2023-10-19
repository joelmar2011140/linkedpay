import Contactos from '../../../src/components/AEmpresa/Contactos/Contactos'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedPay | Contactos',
  description: 'LinkedPay é uma carteira digital rápida e segura de Angola. Baixe agora para gerenciar suas finanças diretamente do seu celular.',
  keywords: ['Carteira digital angolana', 'Aplicativo de finanças', 'Pagamentos móveis', 'Transferência de dinheiro instantânea', 'Gerenciador financeiro móvel', 'App de pagamento seguro', 'Banco móvel em Angola', 'erviço de pagamento online', 'Dinheiro eletrônico em Angola', 'Mobilidade financeira em Angola']
}


export default function PaginaContactos() {
  return (
    <Contactos />
  )
}