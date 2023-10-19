'use client'
import Link from "next/link"
import Image from "next/image"
import FadeRight from "../FadeRight"

export default function Desfrutar() {
  return (
    <FadeRight>
    <div className='w-full h-full lg:h-screen  p-4 flex flex-col items-center justify-center lg:justify-around'>
      <div className="mx-auto flex items-center w-full lg:w-[83%] justify-center flex-col lg:flex-row gap-8 p-4">
        <div className=" flex items-center justify-center w-full lg:w-[50%]">
          <Image
            className="object-contain rounded-md md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
            src="/images/casal.jpg"
            alt="App image"
            width={500}
            priority
            height={500}
          />
        </div>

        <div className=" flex gap-4 flex-col items-start justify-center w-full lg:w-[50%]">
          <h1 className="text-2xl lg:text-start text-center lg:text-4xl text-slate-700 font-bold mb-4 leading-normal">Desfrute de Pagamentos Rápidos e Confiáveis</h1>
          <p className="text-start text-base lg:text-lg lg:text-justify leading-relaxed">É rápido e gratuito enviar dinheiro para qualquer utilizador LinkedPay na nossa plataforma LPay e pode estar certo da sua fiabilidade.</p>
          <Link  href='/inicio/app' className='rounded-md bg-violet-600 px-2 py-2.5 text-base md:text-lg font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600'>Saiba Mais</Link>
        </div>

      </div>
    </div>
  </FadeRight>
  )
}
