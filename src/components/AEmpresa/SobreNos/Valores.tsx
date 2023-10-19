import React from 'react'
import FadeRight from '../../FadeRight'

export default function Valores() {
  return (
    <FadeRight>
    <div className=' w-full h-full p-4 flex flex-col items-center justify-center lg:justify-around'>
    <div className="mx-auto mb-24 flex items-center bg-gray-100 w-full lg:w-[83%] justify-center flex-col lg:justify-start lg:items-start gap-8 p-8">
      <h1 className='text-gray-600 text-base lg:text-4xl font-semibold'>Nossos valores</h1>
      
      <div className='w-full h-full grid gap-8 grid-cols-1 lg:grid-cols-2'>
        <div className='p-8 gap-4 bg-white rounded-lg flex flex-col items-start justify-start text-violet-900'>
        <div className="h-20 w-20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
          </div>
          <h1 className='font-bold text-base lg:text-2xl'>O cliente em primeiro lugar</h1>
          <span className='text-justify'>Procuramos compreender os nossos clientes e priorizar as suas necessidades e objectivos no centro da inovação dos nossos produtos.</span>
          <span className='text-start'>Somos movidos por uma mentalidade de serviço e esforçamo-nos por proporcionar experiências consistentes e positivas ao cliente.</span>
        </div>

        <div className='p-8 bg-white gap-4 rounded-lg flex flex-col items-start justify-start text-violet-900'>
            <div className="h-20 w-20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hash" viewBox="0 0 16 16">
                <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
              </svg>
            </div>
          <h1 className='font-bold text-base lg:text-2xl'>O trabalho de equipa realiza o sonho</h1>
          <span className='text-justify'>Colaboramos eficazmente com pessoas de diversas culturas e origens no sentido de criar equipas coesas, capacitadas e funcionais.</span>
          <span className='text-start'>Somos transparentes na nossa comunicação, sinceros e pragmáticos na nossa abordagem.</span>
        </div>

        <div className='p-8 bg-white rounded-lg gap-4 flex flex-col items-start justify-start text-violet-900'>
        <div className="h-20 w-20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
          <h1 className='font-bold text-base lg:text-2xl'>Continue a inovar</h1>
          <span className='text-justify'>Somos ambiciosos na nossa visão, inspiramo-nos no mundo que nos rodeia e tomamos decisões a medida da nossa realidade local.</span>
          <span className='text-justify'>Iteramos e melhoramos continuamente o nosso produto e a nossa abordagem.</span>
        </div>

        <div className='p-8 bg-white rounded-lg gap-4 flex flex-col items-start justify-start text-violet-900'>
        <div className="h-20 w-20 flex items-center justify-center">
            <svg viewBox="0 0 200 200">
              <rect x="25" y="150" width="150" height="50" fill="currentColor" />
              <rect x="50" y="100" width="100" height="50" fill="currentColor" />
              <rect x="75" y="50" width="50" height="50" fill="currentColor" />
            </svg>
          </div>
          <h1 className='font-bold text-base lg:text-2xl'>Paixão pela excelência</h1>
          <span className='text-justify'>Somos ambiciosos nos nossos objectivos.</span>
          <span className='text-justify'>Esforçamo-nos continuamente para fazer o nosso melhor na aprendizagem e no crescimento.</span>
        </div>
      </div>
    </div>
  </div>
  </FadeRight>
  )
}
