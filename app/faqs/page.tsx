import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'LinkedPay | Perguntas e Respostas',
  description: 'LinkedPay é uma carteira digital rápida e segura de Angola. Baixe agora para gerenciar suas finanças diretamente do seu celular.',
  keywords: ['Carteira digital angolana', 'Aplicativo de finanças', 'Pagamentos móveis', 'Transferência de dinheiro instantânea', 'Gerenciador financeiro móvel', 'App de pagamento seguro', 'Banco móvel em Angola', 'erviço de pagamento online', 'Dinheiro eletrônico em Angola', 'Mobilidade financeira em Angola']
}

export default function PerguntasFrequentesPage() {
  return (
    <div className="p-4 min-h-screen  w-10/12 mx-auto mb-12">
    <h1 className="text-2xl font-bold mb-12 text-center underline">Perguntas e Respostas</h1>
    <h1 className="text-xl font-bold mb-12 text-center underline">PLATAFORMA LPAY</h1>
    <p className="mb-6 mt-4 font-bold">1.	O que é a LPay?</p>
    <p className="mb-4 leading-loose text-start">A LPay é uma plataforma digital e interactiva, para ser utilizada em dispositivos electrónicos, tais como: Smartphones e telefones analógicos além de outros (Ipads…) e que permite efectuar pagamentos de serviços, assim como também com recurso ao QRcode, transferir, receber, carregar dinheiro, e consultar saldo da conta LPay.</p>
    <p className="mb-6 mt-4  font-bold">2.	Quem está habilitado a usar a LPay?</p>
    <p className="mb-4 leading-loose text-start">Podem usar a LPay todas as pessoas que possuam ou não conta bancária (domiciliada em Angola). As transacções efectuadas pelos utilizadores, serão confirmadas desde que tenham fundos suficientes na conta LPay cadastrada.</p>
    <p className="mb-6 mt-4  font-bold">3.	Que documentos posso reunir para puder abrir uma conta na Plataforma LPay?</p>
    <p className="mb-4 leading-loose text-start">As contas L1 podem ser abertas por cidadãos que não possuam um documento de identificação oficial e comprovativo de morada; L2 e L3, os documentos primários são o Nº de Bilhete de Identidade (cópia), NIF, comprovativo de morada.</p>
    <p className="mb-6 mt-4  font-bold">4.	A LPay é segura?</p>
    <p className="mb-4 leading-loose text-start">Sim, o procedimento de segurança é assegurado pela nossa equipa técnica. As manutenções ao sistema e actualizações estão igualmente asseguradas pela nossa equipa. As seguranças físicas e lógicas dos produtos criptográficos respeitam os requisitos de segurança relevantes da Organização e leis em vigor.</p>
    <p className="mb-6 mt-4  font-bold">5.	Posso aceder a LPay para enviar ou receber dinheiro sem nenhum Smartphone?</p>
    <p className="mb-4 leading-loose text-start">Sim, pode usar telefones analógicos sem necessidade de estar ligado a internet.</p>
    <p className="mb-6 mt-4  font-bold">6.	A LPay é regulada?</p>
    <p className="mb-4 leading-loose text-start">Sim, a LPay é regulada pelo Banco Central de Angola (BNA) sob a licença com o número de registo 424 – LinkedPay - Sociedade Prestadora de Serviços de Pagamentos, S.A.</p>
  
    <h1 className="text-xl font-bold mb-12 text-center underline">CADASTRO</h1>
    <p className="mb-6 mt-4 font-bold">1.	Como me poderei registar na plataforma LPay?</p>
    <p className="mb-4 leading-loose text-start">Depois de baixar a aplicação no seu telemóvel (via Android ou Apple store), deverá preencher na página inicial os seus dados e iniciar o processo de registo de usuário individual.</p>
    <p className="mb-6 mt-4  font-bold">2.	No caso de Telefones analógicos, como proceder ao registo na Plataforma LPay?</p>
    <p className="mb-4 leading-loose text-start">Deverá efectuar uma chamada para o número *475#, ou enviar um SMS para o 475 e receberá um pedido de inserção de PIN para seguimento do registo de Conta. Seguir os passos para conclusão do registo.</p>
    <p className="mb-6 mt-4  font-bold">3.	Estou a ter dificuldades para abrir uma conta na plataforma com o meu Nº de Telemóvel, o que posso fazer?</p>
    <p className="mb-4 leading-loose text-blue text-start">Certifique que o número do telemóvel contém 9 dígitos e que seja um número válido em Angola, caso a situação persistir, entre em contacto com a linha de Apoio ao Cliente pelo número 945291843 ou poderá enviar um email para o endereço <Link href='mailto:info@linkedpay.co.ao' className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" >suporte@linkedpay.co.ao</Link></p>
    <p className="mb-6 mt-4  font-bold">4.	Tenho dificuldades para inserir os meus dados para cadastro na Plataforma LPay. O que devo fazer?</p>
    <p className="mb-4 leading-loose text-start">Certifique-se que esteja a baixar a aplicação no seu telemóvel (via Google ou Apple store), caso a situação persistir, poderá receber um apoio técnico ligando para a linha de Apoio ao Cliente pelo número 945291843 ou envie um email para <Link href='mailto:info@linkedpay.co.ao' className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" >suporte@linkedpay.co.ao</Link></p>

    <h1 className="text-xl font-bold mb-12 text-center underline">A MINHA CONTA</h1>
    <p className="mb-6 mt-4 font-bold">1.	Estou a receber uma mensagem de erro a informar que o meu nome de usuário e senha estão incorrectos. O que posso fazer?</p>
    <p className="mb-4 leading-loose text-start">Efectue um novo registo.</p>
    <p className="mb-4 leading-loose text-start">Redefina a sua senha, caso a situação persista poderá contactar a linha de Apoio a Cliente pelo número 945291843 ou enviar um email para o endereço <Link href='mailto:info@linkedpay.co.ao' className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" >suporte@linkedpay.co.ao</Link></p>
    <p className="mb-6 mt-4  font-bold">2.	Como posso obter um registo do meu histórico de actividades?</p>
    <p className="mb-4 leading-loose text-start">Para obter um registo de histórico de actividades, poderá clicar no menu <span className='text-gray-700 underline'>“Info”</span>, em seguida clicar <span className='text-gray-700 underline'>“Transacções” </span>e obter os detalhes do histórico.</p>
    <p className="mb-6 mt-4  font-bold">3.	Como eu elimino a minha conta da plataforma LPay?</p>
    <p className="mb-4 leading-loose text-blue text-start">Poderá eliminar, clicando no menu “Info”, seguido pelo menu <span className='text-gray-700 underline'>“Segurança da Conta” </span>e clicar <span className='text-gray-700 underline'>“Eliminar Conta”</span>.</p>

    <h1 className="text-xl font-bold mb-12 text-center underline">ASSOCIAR A CONTA LPAY À CONTA BANCÁRIA</h1>
    <p className="mb-6 mt-4 font-bold">1.	Quais os Bancos actualmente associados a conta LPay?</p>
    <p className="mb-4 leading-loose text-start">A LPay, por enquanto, tem parceria com o Standard Bank, contudo, brevemente estará associado aos demais Bancos Comerciais.</p>
    
    <h1 className="text-xl font-bold mb-12 text-center underline">LIMITES DE TRANSACÇÕES</h1>
    <p className="mb-6 mt-4 font-bold">As tabelas abaixo espelham os limites de transacções das operações para carteira LPay:</p>
    <p className="mb-6 mt-4 font-bold">TABELA DOS LIMITES DE TRANSACÇÃO PARA FINS PESSOAIS</p>
    <div className="flex flex-col">
<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
  <div className="overflow-hidden">
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-6 py-4">Disposições</th>
          <th scope="col" className="px-6 py-4">Limites de Transacção</th>
          <th scope="col" className="px-6 py-4">Limites Diários</th>
          <th scope="col" className="px-6 py-4">Limites Mensais</th>
          <th scope="col" className="px-6 py-4">Limites de Saldo em Conta</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-4 font-medium">L1</td>
          <td className="whitespace-nowrap px-6 py-4">25.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">25.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">35.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">50.000,00 Kz</td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-4 font-medium">L2</td>
          <td className="whitespace-nowrap px-6 py-4">100.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">200.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">1.000.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">6.000.000,00 Kz</td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-4 font-medium">L3</td>
          <td className="whitespace-nowrap px-6 py-4">3.000.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">3.000.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">3.000.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">10.000.000,00 Kz</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</div>

<p className="mb-6 mt-4 font-bold">TABELA DOS LIMITES DE TRANSACÇÕES PARA FINS COMERCIAIS</p>
    <div className="flex flex-col">
<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
  <div className="overflow-hidden">
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-6 py-4">Disposições</th>
          <th scope="col" className="px-6 py-4">Limites de Transacção</th>
          <th scope="col" className="px-6 py-4">Limites Diários</th>
          <th scope="col" className="px-6 py-4">Limites Mensais</th>
          <th scope="col" className="px-6 py-4">Limites de Saldo em Conta</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-4 font-medium">L1</td>
          <td className="whitespace-nowrap px-6 py-4 font-bold">N/A</td>
          <td className="whitespace-nowrap px-6 py-4 font-bold">N/A</td>
          <td className="whitespace-nowrap px-6 py-4 font-bold">N/A</td>
          <td className="whitespace-nowrap px-6 py-4 font-bold">N/A</td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-4 font-medium">L2</td>
          <td className="whitespace-nowrap px-6 py-4">100.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">500.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">3.200.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">19.200.000,00 Kz</td>
        </tr>
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-4 font-medium">L3</td>
          <td className="whitespace-nowrap px-6 py-4">3.000.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">3.000.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">10.000.000,00 Kz</td>
          <td className="whitespace-nowrap px-6 py-4">19.200.000,00 Kz</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</div>



    <h1 className="text-xl font-bold mb-12 text-center underline">CARREGAR DINHEIRO NA SUA CARTEIRA DIGITAL</h1>
    <p className="mb-6 mt-4 font-bold">1.	Como posso carregar a minha carteira?</p>
    <p className="mb-4 leading-loose text-start">Pode carregar via conta bancária, por referência ou com dinheiro físico via Agentes.</p>
    <p className="mb-6 mt-4 font-bold">2.	Existe um limite de valores que posso ter na minha carteira LPay?</p>
    <p className="mb-4 leading-loose text-start">Sim. Ver tabela acima dos limites de transacções das operações.</p>
    <p className="mb-6 mt-4 font-bold">3.	Existe um limite por operação para a quantia com que posso recarregar a minha carteira LPay (Wallet LPay)?</p>
    <p className="mb-4 leading-loose text-start">Sim. Ver tabela acima, dos limites de transacções das operações.</p>
    <p className="mb-6 mt-4 font-bold">4.	Há alguma taxa para adicionar dinheiro à minha carteira LPay?</p>
    <p className="mb-4 leading-loose text-start">Os carregamentos para a carteira digital são gratuitos.</p>
    <p className="mb-6 mt-4 font-bold">5.	Quanto tempo leva para adicionar dinheiro à minha carteira LPay?</p>
    <p className="mb-4 leading-loose text-start">Os carregamentos feitos na carteira digital refletem-se instantaneamente.</p>

    <h1 className="text-xl font-bold mb-12 text-center underline">ENVIAR E SOLICITAR DINHEIRO</h1>
    <p className="mb-6 mt-4 font-bold">1.	Mandei dinheiro para alguém e não recebeu. O que devo fazer?</p>
    <p className="mb-4 leading-loose text-start">Verifique se enviou o dinheiro para a pessoa certa. Em caso de dúvida contacte a linha de Apoio ao cliente pelo número 945291843 ou envie um email para <Link href='mailto:info@linkedpay.co.ao' className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" >suporte@linkedpay.co.ao</Link></p>
    <p className="mb-6 mt-4 font-bold">2.	Existe um limite para o montante de dinheiro que posso enviar?</p>
    <p className="mb-4 leading-loose text-start">Sim. Ver tabela acima, dos limites de transacções das operações.</p>
    <p className="mb-6 mt-4 font-bold">3.	Alguém me enviou dinheiro com a LPay. Como faço para recebê-lo?</p>
    <p className="mb-4 leading-loose text-start">Receberá um SMS a confirmar a transacção. O valor aparecerá na sua carteira LPay instantaneamente e pode usar o meio que dispõe para movimentar.</p>

    <h1 className="text-xl font-bold mb-12 text-center underline">RETIRAR DINHEIRO</h1>
    <p className="mb-6 mt-4 font-bold">1.	Como posso retirar dinheiro da minha carteira LPay para a minha conta bancária?</p>
    <p className="mb-4 leading-loose text-start">Clique no menu opção “levantamento”, em seguida insira o valor e depois confirmar o mesmo.</p>
    <p className="mb-6 mt-4 font-bold">2.	Existe algum limite para retiradas?</p>
    <p className="mb-4 leading-loose text-start">Sim, existem limites de valores associados a carteira da LPAY. Ver tabela acima, dos limites de transacções das operações.</p>
    <p className="mb-6 mt-4 font-bold">3.	Quanto tempo leva para que os levantamentos cheguem à minha conta bancária?</p>
    <p className="mb-4 leading-loose text-start"> No caso do Standard Bank, a disponibilidade é imediata, no entanto, para os restantes Bancos Comerciais, poderá levar mais tempo até estar disponível na sua conta bancária.</p>
    
  </div>
  )
}
