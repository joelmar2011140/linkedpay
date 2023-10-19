'use client'
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import TextArea from '../../TextArea';
import Input from '../../Input';
import emailJs from '@emailjs/browser'
import FadeRight from '../../FadeRight';

export default function FormularioContactos() {
  const [disabled, setDisabled] = useState(false)
  const [formulario, setFormulario] = useState({ nome: '', email: '', mensagem: '' })

  function handleChange (type: 'select' | 'input', e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    switch (type) {
      case 'input':
        setFormulario({ ...formulario, [e.target.name]: e.target.value })
        break
      case 'select':
        setFormulario({ ...formulario, [e.target.name]: e.target.value })
        break
    }
  }

  function handleEmail () {
    // enviarEmail('tets', formulario.email, 'teste', 'agente')
    // toast('Teste', { position: 'bottom-right', type: 'success' })
    console.log(formulario);
    
    emailJs.send('service_en5h1ua', 'template_w25301o', { assunto: 'teste', mensagem: 'hdhdhd', receptor: 'dhdhd' }, 'zpsgcivB9G67hfXA0').then((sucesso) => {
      console.log('Email enviado')
    }).catch((err) => {
      console.error(err)
    })
  }

  return (
    <FadeRight>
      <div className=' w-full h-full p-4 flex flex-col items-center justify-center lg:justify-around'>
    <div className="mx-auto flex items-center  w-full lg:w-[83%] justify-center flex-col lg:justify-start lg:items-start gap-8 p-8">
    <div className='w-full lg:w-11/12 h-auto p-8  shadow-lg border rounded-lg lg:text-justify text-center mx-auto flex flex-col gap-6 justify-center items-center mb-12'>
        <h1 className="text-2xl text-slate-700 font-bold mb-4 ">Entre em contacto</h1>
        <p className="text-base text-center lg:text-start">Preencha o formulário abaixo e um dos membros da nossa equipa entrará em contacto consigo o mais rapidamente possível</p>
        <div className='w-full p-6 lg:p-2 flex flex-col gap-6 mb-12 items-start justify-start'>
          <Input name='nome' type='text' value={formulario.nome} label='Nome Completo' onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('input', e)} />          
          <Input name='email' type='email' value={formulario.email} label='Email' onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('input', e)} />
          <TextArea value={formulario.mensagem} label='Mensagem'  name='mensagem' onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange('input', e)} />
          <button onClick={handleEmail} className='w-full lg:w-1/2 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline'>Aplicar agora</button>
        </div>
      </div>
      </div>
      </div>
 
    </FadeRight>
    
  )
}