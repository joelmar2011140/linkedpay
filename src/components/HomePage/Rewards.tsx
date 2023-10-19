'use client'
import Image from "next/image"
import FadeRight from "../FadeRight"

export default function Rewards() {
  return (
    <FadeRight>
    <div className='w-full h-full lg:h-screen  p-4 flex flex-col items-center justify-center lg:justify-around'>
      <div className="mx-auto flex items-center w-full lg:w-[83%] justify-center flex-col lg:flex-row gap-8 p-4">
        <div className=" flex gap-4 flex-col items-start justify-center w-full lg:w-[50%]">
          <h1 className="text-2xl lg:text-start text-center lg:text-4xl text-slate-700 font-bold mb-4 leading-normal">Obtenha mais pelo seu dinheiro</h1>
          <p className="text-start text-base lg:text-lg lg:text-justify leading-relaxed">Olá, recompensas! Com a LPay você ganha à medida que gasta através de descontos e retorno. O cliente médio da LPay poupará mais de AOA 10.000,00 por ano. Obtenha a aplicação agora e faça render o seu dinheiro.</p>
        </div>
        <div className=" flex items-center justify-center w-full lg:w-[50%]">
          <Image
            className="object-contain rounded-md md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
            src="/images/man.jpg"
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
