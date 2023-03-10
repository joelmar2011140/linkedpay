'use client'
import Head from "next/head"
import { IStandarLayoutProps } from "@/types"

export default function StandardLayout({ titulo, children }: IStandarLayoutProps) {
  const tituloDaPagina = `LinkedPay | ${titulo}`
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content='LinkedPay é uma carteira digital rápida e segura de Angola. Baixe agora para gerenciar suas finanças diretamente do seu celular.' />
        <meta name="keywords" content='Carteira digital angolana, Aplicativo de finanças, Pagamentos móveis, Transferência de dinheiro instantânea, Gerenciador financeiro móvel, App de pagamento seguro, Banco móvel em Angola, Serviço de pagamento online, Dinheiro eletrônico em Angola, Mobilidade financeira em Angola.' />
        <title>{tituloDaPagina}</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}
