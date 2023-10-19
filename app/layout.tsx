import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { IRootComponent } from '../src/global.types'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LinkedPay | Finança digital que adequa-se ao seu bolso',
  description: 'LinkedPay é uma carteira digital rápida e segura de Angola. Baixe agora para gerenciar suas finanças diretamente do seu celular.',
  keywords: ['Carteira digital angolana', 'Aplicativo de finanças', 'Pagamentos móveis', 'Transferência de dinheiro instantânea', 'Gerenciador financeiro móvel', 'App de pagamento seguro', 'Banco móvel em Angola', 'erviço de pagamento online', 'Dinheiro eletrônico em Angola', 'Mobilidade financeira em Angola']
}

export default function RootLayout({ children }: IRootComponent) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
