import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from 'zod'


export function App() {
  const [nome, setNome] = useState('')
  const regrasFormulario = z.object({
    cep: z.string().min(1, 'Campo obrigatório.'),
    rua: z.string().min(1, 'Campo obrigatório.'),
    numero: z.string().min(1, 'Campo obrigatório.'),
    bairro: z.string().min(1, 'Campo obrigatório.'),
    cidade: z.string().min(1, 'Campo obrigatório.'),
    uf: z.string().min(1, 'Campo obrigatório.').max(2, 'Utilizar sigla.')
  })

  type FormType = z.infer<typeof regrasFormulario>

  
  const formulario = useForm<FormType>({
    resolver: zodResolver(regrasFormulario)
  })

  console.log("Erros do formulário -> ", formulario.formState.errors)
  function enviaFormulario() {
  }

  return (
    <>
      <div>
        <h1 className="font-sans">Cadastro de Cliente</h1>
        <form onSubmit={formulario.handleSubmit(enviaFormulario)} noValidate className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col py-1 relative">
              <label htmlFor="nome" className="text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...formulario.register('nome')}
              />
              {formulario.formState.errors.nome && <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">{formulario.formState.errors.nome.message}</p>}
            </div>

            <div className="col-span-12 flex flex-col py-1 relative">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="email"
                {...formulario.register('email')}
              />
              {formulario.formState.errors.email && <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">{formulario.formState.errors.email.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col py-1 relative">
              <label htmlFor="cep" className="text-sm font-medium text-gray-700 mb-1">CEP</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...formulario.register('cep')}
              />
              {formulario.formState.errors.cep && <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">{formulario.formState.errors.cep.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col py-1 relative">
              <label htmlFor="rua" className="text-sm font-medium text-gray-700 mb-1">Rua</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...formulario.register('rua')}
              />
              {formulario.formState.errors.rua && <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">{formulario.formState.errors.rua.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col py-1 relative">
              <label htmlFor="numero" className="text-sm font-medium text-gray-700 mb-1">Número</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...formulario.register('numero')}
              />
              {formulario.formState.errors.numero && <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">{formulario.formState.errors.numero.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col py-1 relative">
              <label htmlFor="bairro" className="text-sm font-medium text-gray-700 mb-1">Bairro</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...formulario.register('bairro')}
              />
              {formulario.formState.errors.bairro && <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">{formulario.formState.errors.bairro.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col py-1 relative">
              <label htmlFor="cidade" className="text-sm font-medium text-gray-700 mb-1">Cidade</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...formulario.register('cidade')}
              />
              {formulario.formState.errors.cidade && <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">{formulario.formState.errors.cidade.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col py-1 relative">
              <label htmlFor="uf" className="text-sm font-medium text-gray-700 mb-1">UF</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...formulario.register('uf')}
              />
              {formulario.formState.errors.uf && <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">{formulario.formState.errors.uf.message}</p>}
            </div>
          </div>

          <div className="flex gap-4 mt-6 justify-end">
            <button
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition font-medium"
              type="reset"
            >
              Limpar
            </button>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
              type="submit"
            >
              Enviar
            </button>
          </div>