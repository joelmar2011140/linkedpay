import Image from "next/image"
import FadeRight from "../FadeRight"

export default function FriendsApresentatio() {
  return (
    <FadeRight>
    <div className=' w-full h-full p-4 flex flex-col items-center justify-center lg:justify-around'>
      <div className="mx-auto flex items-center w-full lg:w-[83%] justify-center flex-col lg:flex-row gap-8 p-4">
        <div className="w-full gap-12 h-full lg:w-[50%] lg:h-[1024px] p-4 text-center lg:text-justify lg:p-16 font-semibold bg-gray-100 rounded-lg items-center justify-center lg:items-start lg:justify-start">
          <h1 className="text-xl mb-12 lg:text-2xl lg:text-start text-center">A LinkedPay está integrada no ecossistema de pagamentos bancários nacional</h1>
          <span className="text-start">Com a licença do BNA, somos totalmente interoperáveis com o sistema financeiro angolano. Recebemos e enviamos dinheiro em apenas alguns toques no seu telemóvel, entre os utilizadores da LPay, por mensagem (USSD) e transferências bancárias de qualquer banco angolano.</span>
          <div className="w-[100%] h-[50%] mt-12">
            <Image src='/images/Lpay___1.1.png' width={50} height={50} alt="" />
          </div>
        </div>
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full gap-4 text-white lg:h-[560px] h-full lg:w-[50%] p-4 text-center lg:text-justify lg:p-16 font-semibold bg-gray-100 rounded-lg items-center justify-center lg:items-start lg:justify-start">
          <h1 className="text-xl mb-12 lg:text-2xl lg:text-start text-center">Apresente aos seus amigos e seja pago</h1>
          <span className="text-justify">Fique atento as recompensas em dinheiro até 2000KZ e ao bónus de boas-vindas para os seus convidados. A maioria dos clientes LPay descobrem-nos através de uma recomendação.</span>
          <div className="w-[50%] h-[50%] mt-12 mx-auto">
            <Image src='/images/card5introduce.953bd2b5.png' width={50} height={50} alt="" />
          </div>
        </div>
      </div>
  </div>
  </FadeRight>
  )
}
