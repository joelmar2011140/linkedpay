import Image from "next/image"
import FadeRight from "../FadeRight"

export default function Levantamentos() {
  return (
    <FadeRight>
      <div className=' w-full h-full p-4 flex flex-col items-center justify-center lg:justify-around'>
        <div className="mx-auto flex items-center w-full lg:w-[83%] justify-center flex-col lg:flex-row gap-8 p-4">
          <div className="w-full gap-12 h-full lg:w-[50%] lg:h-[580px] p-4 text-center lg:text-justify lg:p-16  border rounded-lg items-center justify-center lg:items-start lg:justify-start">
            <h1 className="text-xl font-semibold mb-12 lg:text-2xl  text-center">Levantamentos LPay</h1>
            <span className="text-start">Com a LinkedPay, tem a liberdade de aceder ao seu dinheiro num só clique.</span>
              <div className="w-[100%] h-[50%] mt-12">
                <Image src='/images/4.png' width={50} height={50} alt="" />
              </div>
          </div>
          <div className="w-full gap-12 h-full lg:w-[50%] lg:h-[580px] p-4 text-center lg:text-justify lg:p-16  border rounded-lg items-center justify-center lg:items-start lg:justify-start">
            <h1 className="text-xl font-semibold mb-12 lg:text-2xl text-center">Suporte personalizado</h1>
            <span className="text-justify">A cada agente é atribuído um gestor de vendas dedicado. Temos também vários canais de apoio para que nos contacte sempre que tenha uma pergunta ou necessite de assistência. Os nossos clientes não precisam de se preocupar em acompanhar questões com transacções, uma vez que trabalhamos de forma celere para as resolver. E terá também acesso a um portal online fácil de utilizar para o ajudar a monitorizar as suas actividades e a gerir a sua conta.</span>
              
          </div>
        </div>
    </div>
    </FadeRight>
  )
}
