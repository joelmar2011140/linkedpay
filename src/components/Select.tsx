import React from 'react'

interface ISelect {
  name: string
  label: string
  value: string
  onChange:  any
  opcoes: {
    label: string
    valor: string
  }[]
}


export default function Select({ label, name, onChange, value, opcoes }: ISelect): JSX.Element {
  return (
    <div className='w-full '>      
       <label className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        { label }
      </label>
      <select name={name} onChange={onChange} defaultValue={value} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option  defaultValue={'Seleccione uma opção'}>Seleccione uma opção</option>
       { opcoes.map((opcao) => (<option key={opcao.label} value={opcao.valor}>{opcao.label}</option>)) }
      </select>
    </div>

  )
}
