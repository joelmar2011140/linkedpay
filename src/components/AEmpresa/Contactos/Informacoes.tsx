'use client'
import Image from "next/image"
import FadeRight from "../../FadeRight"
import { useRouter } from "next/navigation"

export default function Informacoes() {
  const roteador = useRouter()
  return (
    <FadeRight>
    {/* The App */}
    <div className="w-full h-full">
      <div className="flex p-6 mx-auto items-center justify-center w-full lg:w-[83%] flex-col-reverse lg:flex-row gap-8">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center mb-4 md:mb-0">
            <div className="text-start m-2 p-2">
              <h1 className=" text-base text-center lg:text-start lg:text-4xl text-slate-700 font-bold mb-4 leading-normal">Contacte a LinkedPay para mais informações sobre a nossa aplicação.</h1>
              <p className="text-base md:text-lg leading-relaxed">Em acaso de dúvidas e questões ligue para a nossa equipa.</p>
              <p className="text-base md:text-lg leading-relaxed mt-8">Telemóvel +244945291843</p>
              <p className="text-base md:text-lg leading-relaxed">WhatsApp <span onClick={() => roteador.push('https://wa.me/+244945291843')} className='hover:underline font-medium text-blue-600 dark:text-blue-500 cursor-pointer'>+244945291843</span></p>
              <p className="text-base md:text-lg leading-relaxed mt-6">Email: info@linkedpay.co.ao</p>
              <p className="text-base md:text-lg leading-relaxed mt-4">Rua Centro de Convenções S8, Edifício Masuika Office Plaza</p>
              <p className="text-base md:text-lg leading-relaxed">Torre B, 1A , Talatona</p>
              <p className="text-base md:text-lg leading-relaxed">Luanda - Angola</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <Image
              className="object-contain rounded-xl md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
              src="/images/african-american-man-customer-support-operator-with-hands-free-headset-working-office.jpg"
              alt="App image"
              priority
              width={500}
              height={500}
            />
        </div>
      </div>
    </div>
  </FadeRight>
  )
}
