'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import FadeRight from '../FadeRight'

export default function Respostas() {
  return (
    <FadeRight>
      <div className=' w-full mb-16 h-full p-4 flex flex-col items-center justify-center lg:justify-around'>
        <div className="mx-auto flex items-center bg-gray-100 w-full lg:w-[83%] justify-center flex-col lg:justify-center lg:items-center gap-8 p-8">
          <h1 className='text-gray-600 text-base lg:text-xl text-center font-semibold'>Obtenha todas as Respostas Aqui.</h1>
          <span>Respostas às perguntas que acreditamos que possa ter em mente.</span>
          <div className='w-full lg:w-[50%] p-4'>
          <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>P1. Como posso tornar-me num agente?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {/* Envie a sua informação no formulário no fundo do nosso website, ou ligue para a nossa linha directa. Será contactado por um representante dedicado do cliente. */}
                Brevemente
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>P2. Quais são os requisitos para eu me tornar num agente?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {/* Precisará de uma conta bancária e outros documentos necessários para se tornar um agente da LinkedPay. */}
                Brevemente
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
          </div>
       
      </div>
    </div>
    </FadeRight>
    
  )
}
