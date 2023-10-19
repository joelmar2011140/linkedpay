import Image from "next/image"
import FadeRight from "../FadeRight"

export default function Paz() {
  return (
    <FadeRight>
<div className='w-full h-full bg-gray-100 p-4 flex flex-col items-center justify-center lg:justify-around'>
       <div className="flex p-6 mx-auto items-center justify-center w-full lg:w-[83%] flex-col lg:flex-row gap-8">
        <div className="flex flex-col w-full lg:w-[50%] gap-8 lg:gap-4">
          
          <h1 className="text-xl mt-12 text-slate-700 font-bold text-center lg:text-start  mb-4 leading-normal lg:text-4xl">Garantimos a sua paz de espírito</h1>
          <p className="text-justify text-base lg:text-lg leading-relaxed">98% das transacções efectuadas na aplicação LPay são bem-sucedidas em tempo recorde, e a maioria das transacções falhadas são imediatamente revertidas. Garantimos o desempenho da LPay.</p>
        
        </div>
        <div className=" flex items-center justify-center w-full lg:w-[50%]">
          <Image
            className="object-contain md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
            src="/images/transacoes.jpeg"
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
