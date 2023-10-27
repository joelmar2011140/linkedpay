import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'LinkedPay | Contrato de Agentes',
  description: 'LinkedPay é uma carteira digital rápida e segura de Angola. Baixe agora para gerenciar suas finanças diretamente do seu celular.',
  keywords: ['Carteira digital angolana', 'Aplicativo de finanças', 'Pagamentos móveis', 'Transferência de dinheiro instantânea', 'Gerenciador financeiro móvel', 'App de pagamento seguro', 'Banco móvel em Angola', 'erviço de pagamento online', 'Dinheiro eletrônico em Angola', 'Mobilidade financeira em Angola']
}

export default function ContratoAgentesPage() {
  return (
    <div className='w-full h-full p-4 flex flex-col items-center justify-center mb-22'>
      <div className="mx-auto text-justify flex   w-full lg:w-[83%] justify-center flex-col gap-8 p-4">
        <h1 className="text-xl lg:text-2xl font-bold mb-4 text-center underline">TERMOS E CONDIÇÕES PARA AGENTES DA LINKEDPAY</h1>
        <p className="text-base text-justify leading-loose">
        Os Termos e Condições abaixo estabelecidos (o &quot;Acordo&quot;) aplicar-se-ão aos Serviços LinkedPay
prestados pelo Agente. Ao registar-se como Agente LinkedPay, o Agente concorda
automaticamente em respeitar o presente Acordo. É importante que leia e compreenda as
disposições deste Acordo antes de se registar como Agente LinkedPay. Estes Termos e
Condições, juntamente com o Formulário de Registo, constituirão um Acordo juridicamente
vinculativo para si e para os seus sucessores ou representantes pessoais e atribuições.
        </p>
        
        <h1 className="text-xl lg:text-2xl font-bold mb-4">1. DEFINIÇÕES</h1>
        <p className="text-base text-justify leading-loose">
        No presente Acordo, os termos e expressões a seguir devem ter, salvo o contexto em contrário
necessário, os seguintes significados:
        </p>
        <ol className="leading-loose text-start text-base">
          <li><strong>&quot;Activo&quot;</strong>, em relação a um Equipamento Móvel para o qual o serviço habilitado é realizado
regularmente;</li>
          <br />
          <li><strong>&quot;Conta LinkedPay do Agente&quot;</strong>, a Conta LinkedPay aberta em nome do Agente;</li>
          <br />
          <li><strong>&quot;Serviços de Agente&quot;</strong>, tais como os serviços e funções que são de tempos a tempos realizados
pelo Agente nos termos do presente Acordo no âmbito dos Serviços LinkedPay, incluindo, mas
não se limitando a, o registo de Clientes e facilitando as transacções de Cash-in e Cash-out;</li>
<br />
<li><strong>&quot;Acordo&quot;</strong>, entende-se por presente Acordo ao abrigo do qual estão a ser prestados os Serviços
LinkedPay e inclui o Formulário de Registo de Agente, os presentes Termos e Condições,
Horários, Acordos Complementares e Guias Tarifários, que podem ser variados pela LinkedPay
de tempos a tempos;</li>
<br />
<li><strong>&quot;Rede LinkedPay&quot;</strong>, o sistema global de telecomunicações (GSM) operado por operadores de
rede móvel, conforme estipulado de tempos a tempos pela LinkedPay;</li>
<br />
<li><strong>&quot;Assinante LinkedPay&quot;</strong>, um utilizador existente da telefonia móvel da LinkedPay e outros
serviços na Rede LinkedPay;</li>
<br />
<li><strong>&quot;Conta LinkedPay&quot;</strong>, a Conta LinkedPay do Cliente é o registo mantido pela LinkedPay do E-
Valor detido pelo Cliente e representado por uma quantia equivalente de dinheiro detida pela
LinkedPay na Conta de Liquidação em nome do Cliente;</li>
<br />
<li><strong>&quot;Termos de Utilização do Cliente LinkedPay&quot;</strong>, o Contrato que rege a relação entre a
LinkedPay e os seus Clientes em conexão com os Serviços LinkedPay;</li>
<br />
<li><strong>&quot;Manual do Agente LinkedPay&quot;</strong>,o Manual emitido para o agente que estabelece os
procedimentos, orientações, métodos de funcionamento e outras questões práticas relevantes para
a prestação dos Serviços de Agente, conforme actualizado ou alterado de tempos a tempos pela
LinkedPay;</li>
<br />
<li><strong>&quot;Instrução LinkedPay&quot;</strong>,uma instrução dada via SMS para a transferência de Valores de um
Cliente para outro ou de outra forma para efectuar uma Transacção LinkedPay;</li>
<br />
<li><strong>&quot;Serviços LinkedPay&quot;</strong>,os serviços prestados pela LinkedPay para a emissão e resgate de E-
Valores e a transferência de E-Valores entre Clientes com base em Instruções LinkedPay,
incluindo o registo de todas as Transacções LinkedPay, verificando e confirmando todas as
Transacções LinkedPay concluídas e actualizando os registos da Conta LinkedPay;</li>
<br />
<li><strong>&quot;Sistema LinkedPay&quot;</strong> ou <strong>&quot;LinkedPay Money&quot;</strong>,o sistema operado pela LinkedPay que presta
os Serviços LinkedPay;</li>
<br />
<li><strong>&quot;Marca LinkedPay &amp; Nome Comercial&quot;</strong>,o nome LinkedPay e o logotipo pertencentes à
LinkedPay e que só podem ser utilizados pelo Agente de acordo com as disposições do presente
Acordo;</li>
<br />
<li><strong>&quot;Transacções LinkedPay&quot;</strong>,qualquer transacção que resulte no crédito ou debito de uma Conta
LinkedPay de um Cliente nos termos de uma Instrução LinkedPay;</li>
<br />
<li><strong>&quot;Guia do Utilizador LinkedPay&quot;,</strong>o documento que descreve o Sistema LinkedPay e a sua
utilização;</li>
<br />
<li><strong>&quot;Requerente&quot;</strong>,qualquer pessoa que se candidate ou esteja em processo de requerimento de uma
Conta LinkedPay através do Agente;</li>
<br />
<li><strong>&quot;Saldo&quot;</strong>,o montante de E-Valor creditado de tempos em tempos na Conta LinkedPay do Agente;</li>
<br />
<li><strong>&quot;Valor Circulante&quot;</strong>,o dinheiro a fornecer e mantido pelo Agente no Ponto de Venda para a
prestação dos serviços do Agente;</li>
<br />
<li><strong>&quot;Taxa de Cash-in&quot;</strong>significa a taxa a pagar por um Cliente ao Agente por cada Transacção de
Cash-in realizada pelo Agente a pedido do Cliente;</li>
<br />
<li><strong>&quot;Transacção em Numerário&quot;</strong>, o pagamento em dinheiro por um Cliente a um Agente para a
compra de E-Valor ao Agente a creditar numa Conta LinkedPay;</li>
<br />
<li><strong>&quot;Taxa de Levantamento&quot;</strong>, a taxa a pagar por um Cliente ao Agente por cada Transacção de
Cash-out efetuada pelo Agente a pedido do Cliente;</li>
<br />
<li><strong>&quot;Transacção de Cash-out&quot;</strong>, o processo de resgatar o E-Valor da Conta LinkedPay de um
Cliente para obter dinheiro de um Agente;</li>
<br />
<li><strong>&quot;Comissão&quot;</strong>, as taxas a pagar pela LinkedPay ao Agente e inclui as Taxas Transaccionais
previstas no calendário para estes Termos e Condições que podem ser revistas de tempos a
tempos pela LinkedPay;</li>
<br />
<li><strong>&quot;Informações Confidenciais&quot;</strong>, todos os segredos comerciais, know-how, informações e dados
(incluindo todos os conhecimentos e informações financeiros, legais, de marketing, técnicos e
outros), estejam ou não em suporte físico, relativos à LinkedPay e aos Serviços LinkedPay e a
todas as outras informações confidenciais divulgadas por ou em nome de qualquer das partes,
incluindo o presente Acordo;</li>
<br />
<li><strong>&quot;SMS de Confirmação&quot;</strong>, um SMS que contém um resumo dos dados de transacção que é
entregue tanto à parte originária como ao Destinatário após a conclusão bem sucedida da
transacção LinkedPay;</li>
<br />
<li><strong>&quot;Período do Contratual&quot;</strong>, o período inicial de doze (12) meses a contar da Data Efectiva e
sujeito à rescisão antecipada, será automaticamente renovado por períodos adicionais de doze
(12) meses cada, até o seu término;</li>
<br />
<li><strong>&quot;Cliente&quot;</strong>, todas as pessoas (incluindo o Agente) em cujo nome uma Conta LinkedPay está
registada no âmbito da utilização dos Serviços LinkedPay;</li>
<br />
<li><strong>&quot;Equipamento&quot;</strong>, qualquer equipamento, dispositivo ou aparelho fornecido pela LinkedPay ao
Agente para utilização em ligação com os Serviços de Agente;</li>
<br />
<li><strong>&quot;E-Valor&quot;</strong>, o valor electrónico registado na Conta LinkedPay do Cliente, o valor electrónico que
representa o direito do Cliente a um montante equivalente do montante em numerário detido na
Conta Liquidação;</li>
<br />
<li><strong>&quot;ID&quot;</strong>, significa o Bilhete de Identidade do Cliente;</li>
<br />
<li><strong>&quot;Saldo Mínimo&quot;</strong>, significa o mínimo E-Valor circulante e o Saldo mínimo que um Agente deve
manter dentro de um prazo estipulado. Este montante pode vir a ser alterado pela LinkedPay de
tempos em tempos;</li>
<br />
<li><strong>&quot;Equipamento Móvel&quot;</strong>, o Telemóvel ou qualquer outro dispositivo utilizado pelo Agente
LinkedPay para a prestação de serviços;</li>
<br />
<li><strong>&quot;Telemóvel&quot;</strong>significa o aparelho portátil do Agente com a aplicação do Agente LinkedPay
instalada no mesmo;</li>
<br />
<li><strong>&quot;MSISDN&quot;</strong>o Número de Rede Digital de Serviços Integrados para Assinantes Móveis emitido
para um Cliente com o Equipamento Móvel e o correspondente número de identidade e o código
PUK para aceder à Rede LinkedPay;</li>
<br />
<li><strong>&quot;Ponto de Venda&quot;</strong>, o endereço físico ou as instalações do Agente, a partir do qual o Agente
presta os Serviços de Agente;</li>
<br />
<li><strong>&quot;Parte Originária&quot;</strong>, a pessoa que inicia uma transacção LinkedPay em que o E-Valor é
transferido para um destinatário;</li>
<br />
<li><strong>&quot;Parte&quot;</strong>, uma das partes no presente Acordo;</li>
<br />
<li><strong>&quot;Pagamento&quot;</strong>,o pagamento de dinheiro à LinkedPay pela compra de um montante equivalente
de E-Valor;</li>
<br />
<li><strong>&quot;PIN&quot;</strong>significa um número de identificação pessoal de quatro (4) dígitos, sendo o código secreto
que o Agente escolhe para aceder e operar a Conta LinkedPay do Agente;</li>
<br />
<li><strong>&quot;Destinatário&quot;</strong>, um Cliente (pode incluir o Agente) designado pela Parte Originária para receber
o E-Valor;</li>
<br />
<li><strong>&quot;Formulário de Registo&quot;</strong>, o Formulário de Registo Físico ou Electrónico que estabelece os
dados de registo necessários e a aceitação dos Termos de Utilização do Cliente LinkedPay por
um Cliente;</li>
<br />
<li><strong>&quot;Serviços&quot;</strong>, os Serviços LinkedPay e inclui, sempre que aplicável, serviços de voz, marcação
internacional, roaming internacional, serviço de mensagens curtas (&quot;SMS&quot;), correio de voz,
serviços de dados, números de acesso de emergência e quaisquer outros serviços oferecidos
através do operador/s da rede móvel do parceiro LinkedPay, que a LinkedPay compromete-se a
disponibilizar ao Agente de tempos em tempos;</li>
<br />
<li><strong>&quot;SMS&quot;</strong>, um serviço de mensagens curtas constituído por uma mensagem de texto transmitida de
um MSISDN para outro;</li>
<br />
<li><strong>&quot;Documentos Comprovativos&quot;</strong>, toda a identificação e outros documentos necessários para
serem apresentados pelos Requerentes, juntamente com o formulário de registo devidamente
preenchido para solicitação de uma Conta LinkedPay, conforme descrito no Anexo A;</li>
<br />
<li><strong>&quot;Transacções&quot;</strong>, as operações de cash-in e as transações de cash-out;</li>
<br />
<li><strong>&quot;Taxas de Transacção&quot;</strong>, os encargos reais a pagar pelos Clientes pela utilização dos Serviços
LinkedPay, conforme publicados de tempos em tempos no Guia Tarifário ou no website da
LinkedPay;</li>
<br />
<li><strong>&quot;Limites de Transacção&quot;</strong>,os limites colocados pela LinkedPay no que diz respeito ao valor das
transacções que podem ser efetuadas pelo Agente no Outlet, conforme especificado na Tabela do
presente Contrato;</li>
<br />
<li><strong>&quot;Guia Tarifário&quot;</strong>,o documento que estabelece as Taxas de Transacção, bem como as taxas de
caixa recomendadas e as taxas de cash-out recomendadas, publicadas e actualizadas pela
LinkedPay de tempos a tempos, que devem estar claramente apresentadas nas instalações do
Agente;</li>
<br />
<li><strong>&quot;Conta Liquidação&quot;</strong>,a conta bancária mantida pela LinkedPay na qual todos os Pagamentos
são efetuados e detidos pela LinkedPay em nome dos Clientes;</li>
        </ol>


        <h1 className="text-xl text-start lg:text-2xl font-bold mb-4">2. NOMEAÇÃO</h1>
        <ol className="leading-loose text-justify text-base">
          <li>2.1 A LinkedPay nomeia o Agente como Agente LinkedPay, numa base não exclusiva, e o
Agente aceita essa nomeação e concorda em prestar os Serviços de Agente LinkedPay e, em
particular, no mercado, promover e facilitar a distribuição dos Serviços LinkedPay na República
de Angola, de acordo com os termos do presente Acordo e do Manual do Agente LinkedPay e
para a realização de outros actos, funções e serviços que seja especificamente obrigado a fazer
nos termos do presente Acordo.</li>
          <br />
          <li>2.2 É acordado e declarado que não existe qualquer relação de agência entre as Partes e o
Agente compromete-se a não assumir como sendo o Agente da LinkedPay de qualquer forma ou
para qualquer fim.</li>
<br />
<li>2.3 Cada Parte deve estar sempre em conformidade com todas as leis e regulamentos
aplicáveis.</li>
        
        </ol>


        <h1 className="text-xl lg:text-2xl font-bold mb-4">3. ÂMBITO DE APLICAÇÃO DOS SERVIÇOS DE AGENTE FINANCEIRO
LINKEDPAY</h1>
<p className="text-base text-justify leading-loose">O Agente compromete-se, de acordo com os termos do presente Acordo e do Manual do Agente
LinkedPay, a:</p>

        <ol className="leading-loose text-justify text-base">
          <li>3.1.1 Utilizar os seus melhores esforços para registar novos Clientes para os Serviços LinkedPay;</li>
          <br />
          <li>3.1.2 Facilitar e realizar transacções de cash-in e cash-out para os Clientes;</li>
          <br />
          <li>3.1.3 Executar outros serviços e funções acessórias ao acima referido em conexão com os
Serviços LinkedPay, conforme pode ser especificado pela LinkedPay de tempos em tempos.</li>
        </ol>

        <h1 className="text-xl lg:text-2xl font-bold mb-4">4. DIREITOS E OBRIGAÇÕES DO AGENTE</h1>
        <ol className="leading-loose text-justify text-base">
          <li>4.1 O Agente concorda em cumprir em todos os aspetos e em todos os momentos as suas
obrigações, tal como estabelecido no presente Acordo, e em seguir todos os procedimentos aqui
previstos e no Manual do Agente LinkedPay.</li>
          <br />
          <li>4.2 O Agente procederá imediatamente, após a execução do presente Acordo, se não for já feito
antes de tal execução, ao registo na LinkedPay como Cliente e abrirá uma Conta LinkedPay em
seu nome (a &quot;Conta LinkedPay do Agente&quot;) completando, assinando e submetendo o Formulário
de Registo.</li>
          <br />
          <li>4.3 O Agente deve assegurar que, em todos os momentos durante o Período Contratual, que o
Saldo não fique abaixo do Saldo Mínimo.</li>
<br />
<li>4.4 Ao facilitar o registo de novos Clientes, o Agente deve:</li>
<br />
<li>4.4.1 assegurar que o requerente é assinante da LinkedPay com equipamento móvel activo;</li>
<br />
<li>4.4.2 assegurar que os formulários de inscrição sejam preenchidos com exactidão e assinados
pelos requerentes;</li>
<br />
<li>4.4.3 assegurar que todos os documentos comprovativos apresentados estejam completos;</li>
<br />
<li>4.4.4 assegurar que os dados contidos em cada formulário de registo sejam verificados contra
os documentos comprovativos;</li>
<br />
<li>4.4.5 assegurar que as cópias de todos os documentos comprovativos sejam verificadas e
conformes com os seus originais;</li>
<br />
<li>4.4.6 satisfaz-se quanto à identidade do Requerente;</li>
<br />
<li>4.4.7 assegurar que os formulários de registo devidamente preenchidos e documentos
comprovativos recebidos pelo Agente sejam entregues à LinkedPay no prazo de 7 (sete) dias
após a sua apresentação para validação e processamento.</li>
<br />
<li>4.5 Após a recepcção do Formulário de Registo de um Requerente devidamente preenchido,
juntamente com todos os documentos comprovativos, e sujeito às disposições acima referidas, o
Agente solicitará à LinkedPay que abra e active uma Conta LinkedPay em nome do Requerente
utilizando o Equipamento Móvel.</li>
<br />
<li>4.6 O Agente envidará todos os esforços para ajudar os Requerentes no que respeita ao processo
de registo e ao funcionamento inicial das suas Contas LinkedPay.</li>
<br />
<li>4.7 O agente deve recusar-se a registar um Requerente e não solicitar à LinkedPay que abra uma
Conta LinkedPay para o Requerente quando não estiver satisfeito com a prova da identidade do
Requerente.</li>
<br />
<li>4.8 O Agente deve envidar todos os esforços para garantir que está em condições de realizar
transacções de cash-in e cash-out solicitadas pelos Clientes em todos os momentos durante o
Período Contratual.</li>
<br />
<li>4.9 Para facilitar as transacções de cash-in, o Agente deve assegurar que o Saldo não fique
abaixo do Saldo Mínimo e no caso de o Saldo ficar abaixo do Saldo Mínimo, o Agente efectuará
imediatamente um Pagamento de um montante suficiente de dinheiro para elevar o seu Saldo
para, pelo menos, o Saldo Mínimo.</li>
<br />
<li>4.10 A fim de facilitar as transacções de cash-out, o Agente deve assegurar que, em qualquer
momento, mantém um valor mínimo em numerário, equivalente ao Saldo Mínimo aqui
especificado.</li>
<br />
<li>4.11 O Agente deve assegurar que, na realização de quaisquer Transacções, os pagamentos em
numerário só sejam efectuados (a) mediante montantes disponíveis no seu Valor Circulante, (b)
mediante a verificação da exatidão e integridade do SMS de confirmação, e (c) ao certificar-se de

que o Destinatário dos pagamentos em dinheiro é o proprietário do telemóvel na qual a Instrução
LinkedPay, para a realização da Transacção cash-out está a ser transmitida, verificando o ID do
Cliente, com os dados fornecidos no SMS de confirmação.</li>
<br />
<li>4.12 No caso de o Agente não dispor de fundos de caixa suficientes para efectuar uma
Transacção de cash-out, deve recusar-se a realizar a Transacção cash-out. A LinkedPay reserva-
se o direito de tomar quaisquer medidas administrativas, incluindo a aplicação de sanções
quando o Agente ficar persistentemente sem fundos de caixa.</li>
<br />
<li>4.13 Todos os equipamentos fornecidos pela LinkedPay (caso existam) permanecerão
propriedade da LinkedPay, que os substituirá quando perdidos ou danificados, pelo uso ou
desgaste, excepto quando tais perdas ou danos sejam causadas por negligência ou falta de
cuidado do Agente.</li>
<br />
<li>4.14 Não obstante a disposição acima referida, o Agente deve manter todos os Equipamentos e
os Equipamentos Móveis em funcionamento e em bom estado de conservação, excepto o
desgaste razoável, para uso dos Serviços de Agente e em conexão com os Serviços LinkedPay e
deve assegurar que qualquer dano, perda ou roubo do Equipamento seja imediatamente
comunicado à LinkedPay, no prazo máximo de 24 (vinte e quatro) horas após a ocorrência,
conforme previsto no Manual do Agente LinkedPay. O agente indemnizará a LinkedPay contra
todas as reclamações, custos e consequências que possam surgir em consequência de qualquer
violação desta Cláusula.</li>
<br />
<li>4.15 O agente só utilizará as Marcas LinkedPay para efeitos de promoção dos Serviços
LinkedPay e para a prestação dos Serviços de Agente durante o Período Contratual e não para
qualquer outro fim.</li>
<br />
<li>4.16 O Agente apenas prestará os Serviços de Agente no Ponto de Venda acordado, dentro dos
limites da Transacção do respectivo Ponto de Venda.</li>
<br />
<li>4.17 O Agente deve estar sempre em conformidade com os termos do presente Acordo e com os
procedimentos estabelecidos no Manual do Agente LinkedPay, conforme actualizado de tempos
em tempos.</li>
<br />
<li>4.18 O Agente notificará a LinkedPay de qualquer evento ou circunstância que possa ter um
efeito adverso na actividade do Agente e a sua capacidade para cumprir as suas obrigações
imediatamente e em qualquer caso no prazo de cinco (5) dias úteis da ocorrência.</li>
<br />
<li>4.19 O Agente deve cumprir todas as leis, regulamentos e normativos aplicáveis as suas
actividades e a utilização dos Equipamentos e Equipamentos Móveis, bem como os relacionados
com os Serviços do Agente, incluindo, mas não se limitando a, quaisquer leis e regulamentos
anti-branqueamento de capitais e anti-terrorismo.</li>
<br />
<li>4.20 O Agente deve obter e manter todas as licenças e autorizações aplicáveis necessárias para
a realização da sua actividade.</li>
<br />
<li>4.21 O Agente não tem o direito de ceder a sua posição contratual no Acordo a qualquer outra
pessoa sem o consentimento prévio por escrito da LinkedPay.</li>
<br />
<li>4.22 O Agente não tem o direito de nomear sub-agentes para a prestação dos Serviços de
Agente sem o consentimento prévio por escrito da LinkedPay.</li>
<br />
<li>4.23 O Agente concorda em manter confidenciais todas as informações, documentação, dados,
segredos comerciais e know-how que lhe são divulgados pela LinkedPay e todas as outras
Informações Confidenciais, não as devendo divulgar a outra pessoa, nem utilizará Informações
Confidenciais relacionadas com a execução do presente Acordo ou de qualquer parte dele, sem a
aprovação escrita da LinkedPay.</li>
<br />
<li>4.24 O Agente deve cumprir todas as instruções e/ou instruções que a LinkedPay possa dar ao
Agente de tempos em tempos em relação às disposições dos Serviços de Agente e/ou dos
Serviços LinkedPay.</li>
        </ol>

<h1 className="text-xl lg:text-2xl font-bold mb-4">5. TAXAS/COMISSÃO</h1>
<ol className="leading-loose text-justify text-base">
          <li>5.1 O Agente tem direito a comissão em todas as transacções de cash-in e cash-out, conforme
indicado na Tabela do Presente Acordo ou de acordo com o comunicado pela LinkedPay de
tempos a tempos. O Agente não cobrará a um Cliente quaisquer taxas para além das Taxas
Transaccionais indicadas na Lista. A LinkedPay pagará a comissão na Conta do Agentes em E-
Cash.</li>
<br />
<li>5.2 O Agente não tem qualquer reclamação contra a LinkedPay relativamente ao Cash-in e às
Taxas de Levantamento.</li>
<li>5.3 O Agente será responsável por quaisquer deduções ou impostos que sejam obrigados a
ser pagos por lei sobre a Comissão recebida.</li>
<li>5.4 A LinkedPay não presta quaisquer garantias em relação as potenciais receitas que possam ser
obtidas pelo Agente através da prestação dos Serviços de Agente ou de outra forma em conexão
com os Serviços LinkedPay e não deve ser depositada qualquer confiança em quaisquer
declarações ou projecções fornecidas, por escrito ou verbalmente, a este respeito.</li>
<li>5.5 A LinkedPay reserva-se o direito de reter qualquer comissão devida se considerar que o
Agente está envolvido em quaisquer transacções consideradas fraudulentas.</li>
</ol>

<h1 className="text-xl lg:text-2xl font-bold mb-4">6. CONFIDENCIALIDADE</h1>
<ol className="leading-loose text-justify text-base">
          <li>6.1 O Agente tratará como confidencial todas as informações relativas aos Requerentes,
Clientes e Transacções.</li>
<br />
<li>6.2 Cada Parte concorda em manter as Informações Confidenciais sob sigilo e concorda que
não as divulgará, sem o consentimento prévio escrito do proprietário das Informações
Confidenciais, diretamente ou pelos seus representantes, colaboradores e/ou agentes, a qualquer
pessoa ou de qualquer forma, total ou parcialmente. As Partes acordam que as Informações
Confidenciais não serão utilizadas pelas Partes ou pelos seus representantes, colaboradores e/ou
agentes que não sejam no âmbito do presente Acordo e que cada Parte seja responsável e
indemnizará a outra contra qualquer perda sofrida em consequência de qualquer violação da
presente cláusula pelos seus representantes, colaboradores e/ou agentes.</li>
<li>6.3 As Partes acordam em que as informações confidenciais permaneçam até que essas
informações se tornem parte do domínio público sem qualquer culpa ou violação do presente
Acordo.</li>

</ol>

<h1 className="text-xl lg:text-2xl font-bold mb-4">7 REGISTOS</h1>
<p className="text-base text-justify leading-loose">O Agente deve manter registos adequados em relação à prestação dos Serviços de Agente,
incluindo:</p>
<ol className="leading-loose text-justify text-base">
          <li>7.1 As indicações de inscrição de cada candidato a registar num formato adequado e incluir
os pormenores constantes dos Formulários de Registo de Assinante a fornecer pela LinkedPay;</li>
<br />
<li>7.2 As indicações de todas as Transacções realizadas pelo Agente a registar num formato
adequado e devem incluir os seguintes pormenores: O ID de referência, ID de conta, remetente,
destino, montante, taxa, saldo do remetente antes, saldo do remetente após, saldo do destinatário
antes, saldo do destinatário após, carimbo de tempo, referência, estado</li>


</ol>


<h1 className="text-xl lg:text-2xl font-bold mb-4">8 GESTÃO DE SEGURANÇA</h1>

<ol className="leading-loose text-justify text-base">
          <li>8.1 Em caso de perda ou roubo do equipamento do Agente; o Agente deve notificar
imediatamente a LinkedPay de acordo com o Manual do Agente LinkedPay, a fim de que o
LinkedPay possa desactivar o mesmo para impedir a sua utilização posterior e não autorizada. O
Agente é responsável por quaisquer perdas, custos e despesas incorridas no período entre a perda
ou roubo do Equipamento Móvel do Agente e o tempo em que a LinkedPay terá recebido aviso
por escrito de tal perda ou roubo.</li>
<br />
<li>8.2 O Agente é responsável pela segurança e utilização adequada do Equipamento Móvel,
bem como pela manutenção do PIN em segredo, bem como por todas as Instruções LinkedPay
iniciadas com o PIN. O Agente indemnizará a LinkedPay contra todas e quaisquer acções,
reclamações, pedidos, danos, responsabilidade, custos e despesas e quaisquer resultados
decorrentes de qualquer utilização negligente ou indevida do Equipamento Móvel ou PIN.</li>
<br />
<li>8.3 O Agente não deve utilizar o Equipamento Móvel para cometer qualquer infracção.</li>

</ol>

<h1 className="text-xl lg:text-2xl font-bold mb-4">9 DIREITOS E OBRIGAÇÕES DA LINKEDPAY</h1>

<ol className="leading-loose text-justify text-base">
          <li>9.1 A LinkedPay fornecerá e disponibilizará ao Agente os formulários de registo.</li>
<br />
<li>9.2 A LinkedPay assegurará que o Equipamento Móvel do Agente esteja habilitado a
desempenhar a funcionalidade relevante no que diz respeito ao registo de Clientes.</li>
<br />
<li>9.3 A LinkedPay validará as novas Contas LinkedPay mediante a recepção dos formulários de
registo e documentos comprovativos do Agente devidamente preenchidos.</li>
<br />
<li>9.4 A LinkedPay reserva-se o direito de desactivar o Equipamento Móvel do Agente ou de
desligar o Agente da Rede LinkedPay ou do Sistema LinkedPay a qualquer momento se
determinar, a seu exclusivo critério, que o Equipamento Móvel ou a conectividade do Agente
está a ser utilizado ilegalmente ou para outros fins que não sejam relacionados com os Serviços
de Agente ou Serviços LinkedPay ou que o Agente não está a cumprir os termos deste Acordo
e/ou o Agente LinkedPay Manual.</li>
<br />
<li>
9.5 Na máxima extensão permitida por lei, a LinkedPay exclui garantias de todos os tipos e
não será responsável por quaisquer custos, perdas, responsabilidades ou danos, sejam eles
directos, especiais ou consequenciais e quaisquer resultados decorrentes de qualquer suspensão
ou rescisão do presente Acordo ou de qualquer outra forma, nos termos do presente Acordo.
</li>
<br />
<li>
9.6 A LinkedPay fornecerá o Manual do Agente LinkedPay ao Agente logo que possível após a
assinatura do presente Acordo.
</li>
<br />
<li>
9.7 A LinkedPay tem o direito, a qualquer momento, durante o Período Contratual, de
inspeccionar as instalações comerciais, os Pontos de Venda e as operações comerciais do Agente
para garantir o cumprimento dos termos do presente Acordo.
</li>
<br />
<li>
9.8 A LinkedPay reserva-se o direito de alterar os termos do presente Acordo, o Manual do
Agente LinkedPay e as tarifas da Comissão a pagar a qualquer momento e por qualquer motivo.
As alterações serão notificadas por carta; publicadas num jornal diário, SMS, ou no site da
LinkedPay e/ou através de qualquer outro meio adequado e o Agente será considerado como
tendo sido notificado de tais alterações, quer tenham ou não chegado ao conhecimento do
Agente. Ao continuar a utilizar o Equipamento Móvel do Agente após qualquer alteração,
considera-se que o Agente concordou com as alterações.
</li>
<br />


</ol>


<h1 className="text-xl lg:text-2xl font-bold mb-4">10 MARCA, MATERIAL PROMOCIONAL E PROPRIEDADE INTELECTUAL</h1>

<ol className="leading-loose text-justify text-base">
          <li>10.1 A LinkedPay fornecerá ao Agente material da marca e publicidade sem qualquer custo,
mas que continuará a ser propriedade da LinkedPay, que deve ser devolvido a pedido da
LinkedPay, ou após a cessação do presente Acordo</li>
<br />
<li>10.2 O Agente deve exibir e utilizar todos os materiais da marca e publicidade da forma
exigida pela LinkedPay.</li>
<br />
<li>10.3 O Agente concorda que todas as vantagens acumuladas em virtude da utilização da Marca
&amp; Nome Comercial LinkedPay por parte do Agente, na decorrência da execução do presente
Acordo, deverão reverter para à LinkedPay, estando vedado ao Agente adquirir direitos sobre a
Marca &amp;Nome Comercial LinkedPay ou outra propriedade intelectual LinkedPay.</li>
<br />
<li>10.4 O Agente notificará prontamente a LinkedPay de qualquer infracção real, ameaça,
suspeita ou utilização indevida de qualquer Marca &amp; Nomes de Comercial LinkedPay ou outros
direitos de propriedade intelectual, pertencentes à LinkedPay, de que o Agente venha a ter
conhecimento.</li>
<br />
<li>
10.5 O Agente tomará todas as medidas razoáveis para ajudar a LinkedPay a proteger e manter
os direitos de propriedade intelectual da LinkedPay, e deve exibir no Ponto de Venda, e nos
documentos utilizados pelo Agente, no âmbito do presente Acordo, especificações provenientes
da LinkedPay que lhe serão transmitidas com regularidade, revelando ao público que o Agente é
autorizado pela LinkedPay a prestar os Serviços de Agente e não é uma filial da LinkedPay. O
Agente deve igualmente apresentar no Ponto de Venda avisos relacionados com marcas
comerciais, serviços ou direitos de autor, de acordo com especificações provenientes da
LinkedPay, de tempos em tempos.
</li>
<br />
<li>
10.6 O Agente deve assegura que os seus colaboradores ou agentes utilizem apenas a Marca &amp;
Nome Comercial LinkedPay ou qualquer outro direito de propriedade intelectual da LinkedPay,
que o Agente esteja autorizado a utilizar, apenas nos termos e para efeitos do presente Acordo.
</li>
<br />


</ol>

<h1 className="text-xl lg:text-2xl font-bold mb-4">11 LIMITAÇÃO DE RESPONSABILIDADE</h1>

<ol className="leading-loose text-justify text-base">
          <li>11.1 A LinkedPay não terá qualquer responsabilidade (incluindo responsabilidade por
negligência) por qualquer perda, dano ou lesão ao Agente, quaisquer que sejam ou de qualquer
natureza, bem como não será responsável por qualquer reclamação feita contra o Agente por
parte de terceiros.</li>
<br />
<li>11.2 A LinkedPay não se responsabiliza por quaisquer perdas ou danos, directos, indirectos,
consequenciais ou outros (sejam financeiros ou relacionados a lucros, negócios efectivos ou
previsíveis) custos, despesas ou outras reivindicações de compensação, quer sejam causados por
negligência da LinkedPay, dos seus colaboradores, sejam previsíveis ou não.</li>
<br />
</ol>

<h1 className="text-xl lg:text-2xl font-bold mb-4">12 INDEMNIZAÇÕES</h1>
<p className="text-base-leading-loose text-justify">O Agente indemnizará a LinkedPay, de e contra todas as perdas, danos, responsabilidades custos
e despesas incorridas pela LinkedPay em consequência de qualquer violação do presente Acordo
pelo Agente, incluindo quaisquer infracções causadas por qualquer acto, negligência ou
incumprimento dos colaboradores do Agente, ou em resultado de qualquer reclamação de
terceiros em relação a qualquer matéria decorrente da conduta do Agente, desde que a
responsabilidade não tenha sido incorrida directamente por qualquer incumprimento da
LinkedPay em relação às suas obrigações ao abrigo do presente Acordo.</p>

<h1 className="text-xl lg:text-2xl font-bold mb-4">13 INÍCIO, DURAÇÃO E RESCISÃO</h1>

<ol className="leading-loose text-justify text-base">
          <li>13.1 O presente Acordo entra em vigor a partir da data em que o Agente assina o Formulário
de Registo e continuará em vigor por um período inicial de (1) um ano e, renovar-se-á
automaticamente, a menos que cesse em conformidade com as disposições previstas no presente
Acordo..</li>
<br />
<li>13.2 A LinkedPay pode rescindir o presente Acordo:</li>
<br />
<li>13.2.1. Imediatamente, sem aviso prévio, no caso de o Agente ser declarado ou reconhecido que
é insolvente ou não pode pagar as suas dívidas à medida que são devidas ou após a apresentação
de qualquer processo (voluntário ou involuntário) para insolvência, liquidação ou outro tipo de
assistência por parte dos credores do Agente;</li>
<br />
<li>13.2.2. Imediatamente, sem aviso prévio, se qualquer autoridade reguladora ou de aplicação da
lei, instaurar uma acção, execução ou uma investigação contra o Agente que, de acordo com a
avaliação da LinkedPay, prejudicará o funcionamento dos Serviços de Agente ou a reputação
comercial da LinkedPay;</li>
<br />
<li>13.2.3. Imediatamente, sem aviso prévio, no caso de a LinkedPay não estar satisfeita, a seu
exclusivo critério, com nenhuma das políticas, procedimentos ou controlos internos do Agente
(incluindo medidas anti-branqueamento de capitais, compliance ou de financiamento anti-
terrorismo) ou se quaisquer outras políticas do Agente, não satisfaçam as exigências da
LinkedPay;</li>
<br />
<li>13.2.4. No caso de o Agente não poder prestar os Serviços regularmente durante trinta dias
consecutivos ou for objecto de constantes reclamações dos Clientes, sem que dê resposta às
reclamações apresentadas, no prazo de trinta dias, ou o Agente estiver em incumprimento em
relação aos termos do presente Acordo, e esse incumprimento não for corrigido no prazo de 21
(vinte e um) dias, após notificação escrita; ou</li>
<br />
<li>13.2.5 A qualquer momento, por qualquer outro motivo, seja notificado de um prazo mínimo de
30 (trinta) dias.</li>
<br />
<li>13.3 O Agente pode rescindir o presente Acordo mediante notificação escrita não inferior a 60
(sessenta) dias.</li>
<br />
<li>13.4 Após a cessação do presente Acordo, nos termos das disposições acima referidas, ou após o
termo do Período de Contratual:</li>
<br />
<li>13.2.4. As Partes cooperarão para assegurar a conclusão rápida, ordenada e eficaz das suas
relações e quaisquer questões pendentes, incluindo, mas não se limitando a:</li>
<br />
<li>a) realização de quaisquer Transacções ou outros processos, pagamentos, instruções, registos ou
outras actividades iniciadas antes da data de rescisão, relacionadas com os Serviços de Agente
e/ou os Serviços LinkedPay, incluindo a transferência de quaisquer fundos que lhe digam
respeito;</li>
<br />
<li>b) elaboração de um balanço financeiro final e reconciliação de contas;</li>
<br />
<li>c) devolução ou destruição de toda e qualquer Informação Confidencial;</li>
<br />
<li>13.2.5 O Agente sujeito à cláusula 13.4.1 (a) deve cessar imediatamente a prestação dos
Serviços de Agente ou a realização de qualquer outro serviço nos termos do presente Acordo;</li>
<br />
<li>13.2.6 O Agente deve, no prazo de 14 (catorze) dias, devolver à LinkedPay o Equipamento
Móvel do Agente e qualquer outro bem pertencente à LinkedPay, na posse do Agente, em boas
condições de funcionamento, excepto o normal desgaste pelo uso;</li>
<br />
<li>13.2.7 O Agente deixará, imediatamente, de utilizar o Equipamento Móvel do Agente, a Marca
&amp; Nome Comercial LinkedPay ou qualquer outra propriedade intelectual da LinkedPay e
devolverá imediatamente à LinkedPay todos os materiais promocionais, de marca e de
publicidade, bem como todas as Informações Confidenciais em sua posse;</li>
<br />
<li>13.2.8. Caso o Agente, pelos serviços prestados, tenha créditos por receber da LinkedPay, terá
direito à Comissão, nos termos do presente Acordo, desde que a mesma não tenha sido paga
antes da data da rescisão, não tendo o Agente direito a qualquer outra reclamação contra a
LinkedPay, seja em relação a quaisquer despesas ou perdas decorrentes, directa ou
indirectamente, de negócios, danos reputacionais ou qualquer outra perda.</li>
<br />
<li>13.5 Nenhuma Comissão será paga ao Agente após a data da cessação do presente Acordo.</li>
<br />
<li>13.6 Salvo disposição em contrário, a cessação do presente Acordo, independentemente da sua
causa, e sem prejuízo da continuação de qualquer disposição que expressa ou implicitamente
entre em vigor ou continue em vigor após a rescisão, não prejudicará quaisquer direitos das
Partes, adquiridos antes da cessação.</li>
<br />
</ol>
<br />
<h1 className="text-xl lg:text-2xl font-bold mb-4">14 DIREITO À COMPENSAÇÃO</h1>
<p className="text-base leading-loose text-justify">A LinkedPay tem o direito de proceder à compensação de quaisquer quantias devidas ao Agente,
nos termos do presente Acordo, com quaisquer quantias devidas pelo Agente relacionadas com a
execução do presente Acordo.</p>
<br />
<h1 className="text-xl lg:text-2xl font-bold mb-4">15 AVARIA OU MAU FUNCIONAMENTO DO EQUIPAMENTO</h1>
<p className="text-base leading-loose text-justify">A LinkedPay não se responsabiliza por qualquer perda decorrente de quaisquer falhas, avarias ou
atrasos de ou em qualquer rede móvel, telemóvel, Equipamento Móvel, Internet, terminais ou
quaisquer redes de suporte ou partilha resultantes de circunstâncias para além do controlo
razoável da LinkedPay.</p>
<br />

<h1 className="text-xl lg:text-2xl font-bold mb-4">16 CASO FORTUITO OU DE FORÇA MAIOR</h1>

<ol className="leading-loose text-justify text-base">
          <li>16.1 Nenhuma das Partes no presente Acordo será responsabilizada pelo incumprimento das
suas obrigações previstas no presente Acordo, quando o incumprimento for causado por casos
fortuitos ou de força maior, ou seja, por circunstâncias além do controle das Partes, assim
entendidos os fenómenos da natureza, incêndios, inundações, estados de guerra, acidentes,
escassez ou incapacidade de obtenção de materiais, de equipamentos ou de transporte, de entre
outros eventos que possuam as mesmas características, em conformidade com o disposto no
Código Civil.</li>
<br />
<li>16.2 A Parte que for afectada por caso fortuito ou de força maior deverá notificar a outra, de
imediato e por escrito, da extensão do facto e do prazo estimado durante o qual estará inabilitada
a cumprir ou pelo qual será obrigada a atrasar o cumprimento das suas obrigações previstas no
presente Acordo, obrigando-se, ainda, a notificar a outra Parte quando cessados os seus efeitos.</li>
<br />
<li>16.3 Com excepção do previsto no ponto anterior, se o impedimento decorrente de caso
fortuito ou força maior se mantiver por um período superior a 90 (noventa) dias, qualquer uma
das Partes terá direito a rescindir o presente Acordo, notificando à outra Parte, de acordo com o disposto na
Cláusula 17.4 (consequência da rescisão).</li>
<br />
</ol>

<br />

<h1 className="text-xl lg:text-2xl font-bold mb-4">17 DISPOSIÇÕES GENERAIS</h1>

<ol className="leading-loose text-justify text-base">
          <li>17.1 O presente Acordo constitui a totalidade do acordo entre as Partes e substitui qualquer
acordo ou relação anterior entre as Partes em relação aos Serviços de Agente ou aos Serviços
LinkedPay. Sob reserva da Cláusula 9.8, qualquer alteração ao presente Acordo só será válida se
for reduzida à escrito e assinada por ou em nome de cada Parte.</li>
<br />
<li>17.2 Em caso de conflito entre os termos do presente Acordo e o Manual do Agente LinkedPay,
prevalecerão as disposições do presente Acordo.</li>
<br />
<li>17.3 Excepto quando o presente Acordo estabelecer o contrário, os direitos e acções nele
contidos são cumulativos e não exclusivos de quaisquer direitos ou acções previstos na lei O
incumprimento ou atraso por parte da LinkedPay em qualquer momento para aplicar qualquer
um dos termos e condições do presente Acordo ou dos seus direitos não constitui uma renúncia a
esses direitos ou do direito de aplicar tais termos e condições, posteriormente em qualquer
momento.</li>
<br />
<li>17.4 Se qualquer disposição do presente Acordo for declarada, por qualquer autoridade
judicial ou outra autoridade competente ou por um árbitro aqui designado, nula, anulável, ilegal
ou inexequível, as Partes alterarão essa disposição de forma razoável, de acordo com a intenção
das Partes, caso não seja possível, as referidas disposições serão retiradas do presente Acordo,
sem afectar as demais disposições, que continuarão a permanecer em vigor e vinculantes para as
Partes.</li>
<br />
<li>17.5 O Agente deve pagar as despesas da LinkedPay na recuperação de quaisquer montantes
devidos pelo Agente, incluindo honorários legais e taxas.</li>
<br />
<li>17.6 A LinkedPay não será responsável perante o Agente por quaisquer danos indirectos,
consequenciais ou especiais decorrentes de qualquer acto ou omissão da LinkedPay ou de
terceiro pelos quais a LinkedPay é responsável, quer resultem de contrato ou estatuto.</li>
<br />
<li>17.7 Salvo se o contrário for exigido por lei, o Agente não deve fazer ou estar por detrás de
qualquer comunicado de imprensa, anúncio público ou outra divulgação a terceiros relacionado
com o presente Acordo, sem o consentimento prévio por escrito da LinkedPay.</li>
<br />
<li>17.8 Nenhuma disposição do presente Acordo cria uma parceria entre as Partes ou constitui
uma Parte em parceiro da outra para qualquer fim. Nenhuma das Partes tem autoridade ou poder
para vincular, contratar ou incorrer em qualquer responsabilidade em nome da outra Parte,
qualquer que seja a forma ou finalidade.</li>
<br />
<li>17.9 Todos as comunicações ou notificações ao abrigo do presente Acordo serão, salvo
indicação em contrário, por escrito e enviados para os endereços a seguir especificados.</li>
<br />
<li>a]. LinkedPay para: Província de Luanda, Distrito Urbano de Talatona, Município de Talatona, Via
S8, Edifício Masuika Office Plaza MKO Torre B, 1.º andar, n.º 1A.</li>
<br />
<li>b]. Agente: o endereço fornecido pelo Agente no Formulário de Registo no verso.</li>
<br />
</ol>

<h1 className="text-xl lg:text-2xl font-bold mb-4">18 LITÍGIOS</h1>

<ol className="leading-loose text-justify text-base">
          <li>18.1 Os conflitos resultantes da execução do presente Acordo serão resolvidos da seguinte
forma: (i) Mediação; (ii) Arbitragem. Optando-se pela Mediação, a mesma decorrerá nos Centros
de Resolução Extrajudicial de Litígios (CREL), de acordo com o Regulamento de Mediação em
vigor à data do litígio. Se ao fim do prazo de 1 (um) mês não estiver o litígio resolvido, no todo

ou em parte, por via da Mediação, as Partes convencionam voluntariamente o recurso à
Arbitragem, de acordo com o disposto na Cláusula Compromissória constante do Anexo I ao
presente documento e que dele é parte integrante.</li>
<br />
</ol>

<br />
<br />
<br />


      </div>
    </div>
  )
}
