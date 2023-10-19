import { Metadata } from "next"
import AboutTheApp from "../../../src/components/Inicio/AboutTheApp"
import SemCustos from "../../../src/components/Inicio/SemCustos"
import Poupancas from "../../../src/components/Inicio/Poupancas"
import Paz from "../../../src/components/Inicio/Paz"
import FriendsApresentatio from "../../../src/components/Inicio/FriendsApresentatio"


export const metadata: Metadata = {
  title: 'LinkedPay | Sobre a app',
  description: 'LinkedPay é uma carteira digital rápida e segura de Angola. Baixe agora para gerenciar suas finanças diretamente do seu celular.',
  keywords: ['Carteira digital angolana', 'Aplicativo de finanças', 'Pagamentos móveis', 'Transferência de dinheiro instantânea', 'Gerenciador financeiro móvel', 'App de pagamento seguro', 'Banco móvel em Angola', 'erviço de pagamento online', 'Dinheiro eletrônico em Angola', 'Mobilidade financeira em Angola']
}

export default function InicioApp() {
  return (
    <>
      <AboutTheApp />
      <SemCustos />
      <Poupancas/>
      <Paz />
      <FriendsApresentatio />
    </>
  )
}
