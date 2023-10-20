'use client'
import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Input from '../Input'
import Select from '../Select'
import emailJs from '@emailjs/browser'
import Link from 'next/link';

export default function FormularioAgentes() {
  const roteador = useRouter()
  const [disabled, setDisabled] = useState(false)
  const [formulario, setFormulario] = useState({ nome: '', email: '', telefone: '', provincia: '', municipio: '', comerciante: '', terminal: '' })

  function handleChange (type: 'select' | 'input', e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) {
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
    if (formulario.comerciante.length === 0) {
      toast('Deve especificar se é comerciante', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    } else if (formulario.email.length === 0) {
      toast('Forneça por favor o seu email', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    } else if (formulario.nome.length === 0) {
      toast('Forneça por favor o seu nome', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    } else if (formulario.terminal.length === 0) {
      toast('Deve especificar se já possui um terminal', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    } else if (formulario.provincia.length === 0) {
      toast('Forneça por favor a sua província', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    } else if (formulario.municipio.length === 0) {
      toast('Forneça por favor o seu município', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    } else if (formulario.telefone.length === 0) {
      toast('Forneça por favor o seu numero de telefone', { position: 'top-right', type: 'error' })
      setDisabled(true)
      return
    }
    
    emailJs.send('service_en5h1ua', 'template_y5h7a93', { nome: formulario.nome, email: formulario.email, telefone: formulario.telefone, provincia: formulario.provincia, municipio: formulario.municipio, comerciante: formulario.comerciante, terminal: formulario.terminal, receptor: 'info@linkedpay.co.ao' }, 'zpsgcivB9G67hfXA0').then((sucesso) => {
      toast('Email enviado com sucesso, será respondido(a) brevemente.', { position: 'top-right', type: 'success' })
      setFormulario({
        comerciante: '',
        email: '',
        municipio: '',
        nome: '',
        provincia: '',
        telefone: '',
        terminal: ''
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
    <div className=' w-full h-full p-4 flex flex-col items-center justify-center lg:justify-around'>
    <div className="mx-auto flex items-center  w-full lg:w-[83%] justify-center flex-col lg:justify-start lg:items-start gap-8 p-8">
    <div className='w-full lg:w-11/12 h-auto p-8  shadow-lg border rounded-lg lg:text-justify text-center mx-auto flex flex-col gap-6 justify-center items-center mb-12'>
        <h1 className="text-xl lg:text-2xl text-slate-700 font-bold mb-4 ">Faça dinheiro com a LinkedPay</h1>
        <p className="text-base text-center">Preencha o formulário abaixo e um dos membros da nossa equipa entrará em contacto consigo o mais rapidamente possível</p>
        <Link href='termos/contrato-comerciantes' className='text-blue-600 underline font-semibold cursor-pointer'>TERMOS & CONDIÇÕES Contrato  de Comerciantes</Link>
        <div className='w-full p-6 lg:p-2 flex flex-col gap-6 mb-12 items-start justify-start'>
          <Input name='nome' type='text' value={formulario.nome} label='Nome Completo' onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('input', e)} />
          <div className='flex flex-col lg:flex-row w-full gap-2'>
            <Input name='email' type='email' value={formulario.email} label='Email' onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('input', e)} />
            <Input name='telefone' type='tel' value={formulario.telefone} label='Telefone' onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('input', e)} />
          </div>
          <div className='flex flex-col lg:flex-row w-full gap-2'>
            <Select value={formulario.comerciante} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('select', e)} name='comerciante' label='É comerciante ?' opcoes={[{ label: 'Sim', valor: 'Sim' }, { label: 'Não', valor: 'Não' }]} />
            <Select value={formulario.terminal} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('select', e)} name='terminal' label='Possui um terminal ?' opcoes={[{ label: 'Sim', valor: 'Sim' }, { label: 'Não', valor: 'Não' }]} />
          </div>
          <div className='flex flex-col lg:flex-row w-full gap-2'>
            <Input value={formulario.provincia} name='provincia' type='text' label='Província' onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('input', e)} />
            <Input name='municipio' type='text' value={formulario.municipio} label='Município' onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('input', e)} />
          </div>
          <button disabled={disabled} onClick={handleEmail} className='w-full lg:w-1/2 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline'>Aplicar agora</button>
        </div>
      </div>
      </div>
      </div>
 
  )
}
