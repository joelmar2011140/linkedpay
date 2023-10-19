import React from 'react'
import FadeRight from '../FadeRight'

export default function Recrutamento() {
  return (
    <FadeRight>
      <div className=' w-full h-full p-4 flex flex-col items-center justify-center lg:justify-around'>
      <div className="mx-auto flex items-center bg-gray-100 w-full lg:w-[83%] justify-center flex-col lg:justify-start lg:items-start gap-8 p-8">
        <h1 className='text-gray-600 text-xl lg:text-start text-center lg:text-4xl font-semibold'>Torne-se um Agente da LinkedPay</h1>
        <span className='text-justify'>Pode registar-se na aplicação LPay ou clicar no botão para preencher um formulário de pedido de chamada de volta.</span>
        <div className='w-full h-full grid gap-16 lg:gap-16 grid-cols-1 lg:grid-cols-2'>
          <div className='p-8 bg-white rounded-lg flex flex-col items-start justify-start text-violet-900'>
            <div className="h-20 w-20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blueviolet" className="bi bi-cash" viewBox="0 0 16 16">
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
              </svg>
            </div>
            <h1 className='font-bold text-base lg:text-2xl'>Ganhe mais dinheiro</h1>
            <span className='text-justify'>Estamos aqui para o ajudar a fazer crescer o seu negócio através de comissões atractivas, taxas baixas e incentivos de desempenho.</span>
          </div>

          <div className='p-8 bg-white rounded-lg flex flex-col items-start justify-start text-violet-900'>
          <div className="h-20 w-20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
            </svg>
          </div>
            <h1 className='font-bold text-base lg:text-2xl'>Apoio ao cliente 24/7</h1>
            <span className='text-justify'>Terá acesso a um gestor de vendas dedicado e à nossa linha de atendimento ao cliente 24 horas por dia, 7 dias por semana, para o apoiar.</span>
          </div>

          <div className='p-8 bg-white rounded-lg flex flex-col items-start justify-start text-violet-900'>
          <div className="h-20 w-20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-tablet-fill" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
            </svg>
          </div>
            <h1 className='font-bold text-base lg:text-2xl'>O dispositivo certo para si</h1>
            <span className='text-justify'>Quer esteja apenas a começar ou tenha requisitos comerciais complexos, nós temos a solução para si! </span>
          </div>

          <div className='p-8 bg-white rounded-lg flex flex-col items-start justify-start text-violet-900'>
          <div className="h-20 w-20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-gear-wide" viewBox="0 0 16 16">
              <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
            </svg>
          </div>
            <h1 className='font-bold text-base lg:text-2xl'>Valor Acrescentado</h1>
            <span className='text-justify'>Não nos limitamos aos pagamentos. Adquira ferramentas para o ajudar a gerir o seu negócio e aumentar a sua base de clientes e receitas.</span>
          </div>
        </div>
      </div>
    </div>
    </FadeRight>
    
  )
}
