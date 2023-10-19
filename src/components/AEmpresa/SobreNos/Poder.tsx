'use client'
import Link from "next/link"
import Image from "next/image"
import FadeRight from "../../FadeRight"

export default function Poder() {
  return (
    <FadeRight>
    <div className='w-full h-full lg:h-screen  p-4 flex flex-col items-center justify-center lg:justify-around'>
      <div className="mx-auto flex items-center  w-full lg:w-[83%] justify-center flex-col-reverse lg:flex-row gap-8 p-4">
        <div className=" flex gap-4 flex-col items-start justify-center w-full lg:w-[50%]">
          <h1 className="text-2xl lg:text-start text-center lg:text-4xl text-slate-700 font-bold mb-4 leading-normal">Usamos o Poder da Tecnologia para Acelerar a Inclusão Financeira</h1>
          <p className="text-justify text-base lg:text-lg lg:text-justify leading-relaxed">Para os nossos clientes, a aplicação LPay é a sua primeira conta financeira formal. A LinkedPay foi lançada em Angola, para fornecer aos nossos clientes pagamentos digitais confiáveis através da sua aplicação LPay.</p>
          <p className="text-justify text-base lg:text-lg lg:text-justify leading-relaxed">O nosso objectivo é chegar rapidamente ao maior número possível de pessoas nos próximos 3 anos, entrar em mais mercados e capacitar o maior número de consumidores e empresas providenciando acesso a serviços financeiros relevantes, fiáveis e acessíveis.</p>
          <p className="text-justify text-base lg:text-lg lg:text-justify leading-relaxed">Para o conseguirmos, construímos um ecossistema de pagamentos online e offline que reúne os melhores produtos digitais de todo o mercado, juntamente com as nossas próprias características inovadoras, que os torna disponíveis a qualquer pessoa com um smartphone e analógico.</p>
        </div>
        <div className=" flex items-center justify-center w-full lg:w-[50%]">
          <Image
            className="object-contain rounded-md md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
            src="/images/glad-afro-woman-stares-smartphone-device-connected-headphones.jpg"
            alt="App image"
            width={500}
            priority
            height={500}
          />
        </div>
      </div>
    </div>
  </FadeRight>
  )
}
