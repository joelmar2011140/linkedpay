import Link from "next/link"
import Image from "next/image"
import FadeRight from "../FadeRight"

export default function SemCustos() {
  return (
    <FadeRight>
    <div className='w-full h-full lg:h-screen bg-gray-100 p-4 flex flex-col items-center justify-center lg:justify-around'>
      <div className="mx-auto flex items-center w-full lg:w-[83%] justify-center flex-col lg:flex-row gap-8 p-4">
        <div className=" flex items-center justify-center w-full lg:w-[60%]">
          <Image
            className="object-contain rounded-md md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
            src="/images/pretty_down.jpg"
            alt="App image"
            width={500}
            priority
            height={500}
          />
        </div>

        <div className=" flex gap-4 flex-col items-start justify-center w-full lg:w-[50%]">
          <h1 className="text-2xl lg:text-start text-center lg:text-4xl text-slate-700 font-bold mb-4 leading-normal">Transferir dinheiro sem custos</h1>
          <p className="text-justify text-base lg:text-lg lg:text-justify leading-relaxed">Olá, transferências rápidas e gratuitas! Desfrute de mais de 90 transferências bancárias gratuitas por mês na LPay. O envio para outros utilizadores da LPay é sempre gratuito.</p>
        </div>

      </div>
    </div>
  </FadeRight>
  )
}
