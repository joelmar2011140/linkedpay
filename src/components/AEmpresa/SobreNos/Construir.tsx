import React from 'react'
import Image from 'next/image'
import FadeRight from '../../FadeRight'

export default function Construir() {
  return (
    <FadeRight>
    {/* The App */}
    <div className="w-full h-full">
      <div className="flex p-6 mx-auto items-center justify-center w-full lg:w-[83%] flex-col-reverse lg:flex-row gap-8">
        <div className="flex flex-col justify-start gap-8 lg:gap-2 w-full lg:w-[50%] ">
          <h1 className="text-xl text-slate-700 font-semibold lg:text-start  mb-22  text-center lg:text-4xl">Construir o futuro financeiro em África</h1>
          
          <p className="text-justify lg:text-justify text-base lg:text-lg leading-relaxed">A LinkedPay está a redefinir a experiência de pagamentos para consumidores e empresas em África, tornando os serviços financeiros mais acessíveis e convenientes.</p>
        
        </div>
        <div className=" flex items-center justify-center w-full lg:w-[50%]">
          <Image
            className="object-contain md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
            src="/images/africa_v2_rounded.png"
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
