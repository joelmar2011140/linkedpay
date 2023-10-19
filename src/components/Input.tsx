import React from "react"

interface IInput {
  name: string
  label: string
  value: string
  type?: 'text' | 'tel' | 'email'
  onChange: any
}

export default function Input({ label, name, onChange, value, type }: IInput) {
  return (
    <div className="w-full ">
      <label className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        { label }
      </label>
      <input type={type} name={name} defaultValue={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-first-name"  placeholder={label}/>
    </div>
  )
}
