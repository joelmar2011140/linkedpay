import Image from "next/image"
import FadeRight from "../FadeRight"

export default function GanharDinheiro() {
  return (
    <FadeRight>
       <div className="w-full h-full">
      <div className="flex p-6 mx-auto items-center justify-center w-full lg:w-[83%] flex-col-reverse lg:flex-row gap-8">
        <div className="flex flex-col gap-4 lg:gap-2 w-full lg:w-[50%] ">
          <h1 className="text-xl text-center lg:text-start text-slate-700 font-semibold  mb-22  lg:text-4xl">Ganhe dinheiro com a LinkedPay</h1>
          <p className="text-justify text-base md:text-lg leading-relaxed">Ganhe comissões elevadas e ofereça aos seus clientes pagamentos fiáveis como agente móvel LPay. Descarregue e inscreva-se na aplicação LPay para começar!</p>
         
        </div>
        <div className=" flex items-center justify-center w-full lg:w-[50%]">
          <Image
            className="object-contain md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
            src="/images/lovepik.jpg"
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
