import Image from "next/image"
import FadeRight from "../FadeRight"

export default function Comissoes() {
  return (
    <FadeRight>
      <div className=' w-full h-full p-4 flex flex-col items-center justify-center lg:justify-around'>
        <div className="mx-auto flex items-center w-full lg:w-[83%] justify-center flex-col lg:flex-row gap-8 p-4">
          <div className="w-full gap-12 h-full lg:w-[50%] lg:h-[780px] p-4 text-center lg:text-justify lg:p-16 font-semibold border rounded-lg items-center justify-center lg:items-start lg:justify-start">
            <h1 className="text-xl mb-12 lg:text-2xl lg:text-start text-center">Escolha a melhor opção</h1>
            <span className="text-start">Dentro do nosso leque de ofertas POS temos a sua disposição a melhor solução para melhor satifisazer os requisitos do negócio.</span>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="w-[100%] h-[50%] mt-12">
                <Image src='/images/card3choose1.950fa05b.png' width={50} height={50} alt="" />
              </div>
              <div className="w-[100%] h-[50%] mt-12">
                <Image src='/images/card3choose2.c7fdae28.png' width={50} height={50} alt="" />
              </div>
              <div className="w-[100%] h-[50%] mt-12">
                <Image src='/images/card3choose3.c07f64a6.png' width={50} height={50} alt="" />
              </div>
            </div>
            
          </div>
          <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-full gap-12 lg:h-[780px] h-full lg:w-[50%] p-4 text-center lg:text-justify lg:p-16 font-semibold bg-gray-100 rounded-lg items-center justify-center lg:items-start lg:justify-start">
            <h1 className="text-xl mb-12 lg:text-2xl lg:text-start text-center">Comissões altas, Preços baixos</h1>
            <span className="text-justify">Ganhe mais com LinkedPay! Desfrute de taxas baixas e ganhe incentivos extra para atingir marcos de desempenho.</span>
            <div className="w-[100%] h-[50%] mt-12">
              <Image src='/images/card3High.005a340e.png' width={50} height={50} alt="" />
            </div>
          </div>
        </div>
    </div>
    </FadeRight>
  )
}
