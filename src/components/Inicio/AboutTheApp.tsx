'use client'
import Image from "next/image"
import FadeRight from "../FadeRight"

export default function AboutTheApp() {
  return (
    <FadeRight>
    {/* The App */}
    <div className="w-full h-full">
      <div className="flex p-6 mx-auto items-center justify-center w-full lg:w-[83%] flex-col lg:flex-row gap-8">
        <div className="flex flex-col w-full lg:w-[50%] ">
          <h1 className="text-2xl text-center lg:text-justify text-slate-700 font-semibold  mb-22  lg:text-4xl">A forma mais inteligente de pagar</h1>
          <p className="text-justify text-base md:text-lg leading-relaxed">Enviar dinheiro é rápido e fácil na plataforma LPay (LinkedPay) e pode ganhar recompensas! Crie uma conta e comece a transaccionar em minutos a partir do seu telefone e desfrute da experiência.</p>
          <div className="flex justify-center lg:items-center lg:justify-start mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=ao.co.linkedpay.lpay"
              className="mr-4 inline-block text-gray-600 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-google-play" viewBox="0 0 16 16">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
              </svg>
            </a>
            <a
              href="https://apps.apple.com/us/app/lpay/id6446079056"
              className="mr-4 inline-block text-gray-600 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-apple" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className=" flex items-center justify-center w-full lg:w-[50%]">
          <Image
            className="object-contain md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
            src="/images/Lpay___15.1.png"
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
