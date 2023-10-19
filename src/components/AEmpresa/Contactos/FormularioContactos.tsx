'use client'
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import TextArea from '../../TextArea';
import Input from '../../Input';
import emailJs from '@emailjs/browser'
import FadeRight from '../../FadeRight';

export default function FormularioContactos() {
  const [disabled, setDisabled] = useState(false)
  const [formulario, setFormulario] = useState({ nome: '', email: '', mensagem: '', assunto: '' })

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
    if (formulario.assunto.length === 0) {
      toast('Forneça por favor o assunto deste email', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    } else if (formulario.email.length === 0) {
      toast('Forneça por favor o seu email', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    } else if (formulario.mensagem.length === 0) {
      toast('Forneça por favor a mensagem', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    }
    
    emailJs.send('service_en5h1ua', 'template_w25301o', { assunto: formulario.assunto, nome: (formulario.nome.length === 0) ? formulario.email : formulario.nome, mensagem: formulario.mensagem, emissor: formulario.email, receptor: 'info@linkedpay.co.ao' }, 'zpsgcivB9G67hfXA0').then((sucesso) => {
      toast('Email enviado com sucesso, será respondido(a) brevemente.', { position: 'top-right', type: 'success' })
      setFormulario({
        email: '',
        mensagem: '',
        nome: '',
        assunto: ''
      })
      // info@linkedpay.co.ao <info@linkedpay.co.ao>;
      setDisabled(false)
      return
    }).catch((err) => {
      console.log(err)
      toast('Não foi possível enviar este email, tente novamente', { position: 'top-right', type: 'error' })
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
          <Input name='assunto' type='text' value={formulario.assunto} label='Assunto' onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('input', e)} />          
          <Input name='email' type='email' value={formulario.email} label='Email' onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('input', e)} />
          <TextArea value={formulario.mensagem} label='Mensagem'  name='mensagem' onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange('input', e)} />
          <button onClick={handleEmail}  className='justse w-full lg:w-1/2 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline'>Aplicar agora</button>
        </div>
      </div>
      </div>
      </div>
 
    </FadeRight>
    
  )
}
