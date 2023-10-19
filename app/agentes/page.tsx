import { Metadata } from "next"
import Levantamentos from "../../src/components/Agentes/Levantamentos"
import Comissoes from "../../src/components/Agentes/Comissoes"
import GanharDinheiro from "../../src/components/Agentes/GanharDinheiro"
import Recrutamento from "../../src/components/Agentes/Recrutamento"
import Respostas from "../../src/components/Agentes/Respostas"
import FormularioAgentes from "../../src/components/Agentes/FormularioAgentes"

export const metadata: Metadata = {
  title: 'LinkedPay | Agentes',
  description: 'LinkedPay é uma carteira digital rápida e segura de Angola. Baixe agora para gerenciar suas finanças diretamente do seu celular.',
  keywords: ['Carteira digital angolana', 'Aplicativo de finanças', 'Pagamentos móveis', 'Transferência de dinheiro instantânea', 'Gerenciador financeiro móvel', 'App de pagamento seguro', 'Banco móvel em Angola', 'erviço de pagamento online', 'Dinheiro eletrônico em Angola', 'Mobilidade financeira em Angola']
}

export default function AgentesApge() {
  return (
    <>
      <GanharDinheiro />
      <Recrutamento />
      <Comissoes />
      <Levantamentos  />
      <Respostas />
      <FormularioAgentes />
    </>
  )
}
