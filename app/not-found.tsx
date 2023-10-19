import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className='w-full h-full lg:h-screen  p-4 flex flex-col items-center justify-center lg:justify-around'>
      <div className="mx-auto flex items-center w-full lg:w-[83%] justify-center flex-col-reverse lg:flex-row gap-8 p-4">
        
      <div className=" flex gap-4 flex-col items-center lg:items-start justify-center w-full lg:w-[50%]">
      <h1 className="text-2xl lg:text-start text-center lg:text-6xl text-slate-700 font-bold mb-4 leading-normal">ERRO 404</h1>
          <h1 className="text-2xl lg:text-start text-center lg:text-4xl text-slate-700 font-bold mb-4 leading-normal">OOOOOppsssss</h1>
          <h3 className="text-2xl lg:text-start text-center lg:text-4xl text-slate-700 font-bold mb-4 leading-normal">Página não encontrada</h3>
          <p className="text-start text-base lg:text-lg lg:text-justify leading-relaxed">Não conseguimos encontrar a página que está à procura</p>
          <Link  href='/' className='rounded-md bg-violet-600 px-2 py-2.5 text-base md:text-lg font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600'>Página inicial</Link>
        </div>
        <div className=" flex items-center justify-center w-full lg:w-[50%]">
          <Image
            className="object-contain rounded-md md:object-scale-down h-full w-full md:max-h-full md:max-w-none"
            src="/images/no_money.svg"
            alt="App image"
            width={500}
            priority
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
