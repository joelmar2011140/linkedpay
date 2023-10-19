import Image from "next/image"
import FadeRight from "../FadeRight"

export default function Poupancas() {
  return (
    <FadeRight>
      <div className=' w-full h-full p-4 flex flex-col items-center justify-center lg:justify-around'>
        <div className="mx-auto flex items-center w-full lg:w-[83%] justify-center flex-col lg:flex-row gap-8 p-4">
          <div className="w-full gap-12 h-full lg:w-[50%] lg:h-[980px] p-4 text-center lg:text-justify lg:p-16 font-semibold bg-gray-100 rounded-lg items-center justify-center lg:items-start lg:justify-start">
            <h1 className="text-xl mb-12 lg:text-2xl lg:text-start text-center">Poupe enquanto gasta com as Recompensas</h1>
            <span className="text-start">O cliente médio da LinkedPay poupa mais de 10.000KZ por ano simplesmente ao mudar os seus pagamentos para a plataforma LPay. Adira hoje e comece a ganhar à medida que gasta.</span>
            <div className="w-[100%] h-[50%] mt-12">
              <Image src='/images/Lpay___1.1.png' width={50} height={50} alt="" />
            </div>
          </div>
          <div className="w-full gap-12 lg:h-[980px] h-full lg:w-[50%] p-4 text-center lg:text-justify lg:p-16 font-semibold bg-gray-100 rounded-lg items-center justify-center lg:items-start lg:justify-start">
            <h1 className="text-xl mb-12 lg:text-2xl lg:text-start text-center">Acompanhe o fluxo das suas transacções do princípio ao fim</h1>
            <span className="text-justify">Mantenha-se a par das suas transacções e siga o seu percurso em tempo real. Veja para onde vai o seu dinheiro e estabeleça facilmente na nossa aplicação, pagamentos recorrentes e contactos guardados.</span>
            <div className="w-[100%] h-[50%] mt-12">
              <Image src='/images/transacoes.jpeg' width={50} height={50} alt="" />
            </div>
          </div>
        </div>
    </div>
    </FadeRight>
  )
}
