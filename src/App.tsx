import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const regrasFormulario = z.object({
  cep: z.string().min(1, "Campo obrigatório."),
  rua: z.string().min(1, "Campo obrigatório."),
  numero: z.string().min(1, "Campo obrigatório."),
  bairro: z.string().min(1, "Campo obrigatório."),
  cidade: z.string().min(1, "Campo obrigatório."),
  uf: z.string().min(2, "Campo obrigatório.").max(2, "Utilizar sigla."),
})

type FormType = z.infer<typeof regrasFormulario>

export function App() {
  const [enderecos, setEnderecos] = useState<FormType[]>([])

  const formulario = useForm<FormType>({
    resolver: zodResolver(regrasFormulario),
  })

  function enviaFormulario(dados: FormType) {
    setEnderecos((prev) => [...prev, dados])
    formulario.reset()
  }

  const erro = formulario.formState.errors

  return (
    <div className="min-h-screen bg-pink-100 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Cadastro de Endereços
        </h1>

        <form
          onSubmit={formulario.handleSubmit(enviaFormulario)}
          noValidate
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CEP
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-md transition
                  focus:outline-none focus:ring-2
                  ${
                    erro.cep
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-200"
                  }`}
                inputMode="numeric"
                {...formulario.register("cep")}
              />
              {erro.cep && (
                <p className="text-xs text-red-600 mt-1">
                  {erro.cep.message}
                </p>
              )}
            </div>

          
            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rua
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-md transition
                  focus:outline-none focus:ring-2
                  ${
                    erro.rua
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300  focus:ring-green-200"
                  }`}
                {...formulario.register("rua")}
              />
              {erro.rua && (
                <p className="text-xs text-red-600 mt-1">
                  {erro.rua.message}
                </p>
              )}
            </div>

          
            <div className="md:col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-md transition
                  focus:outline-none focus:ring-2
                  ${
                    erro.numero
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-200"
                  }`}
                {...formulario.register("numero")}
              />
              {erro.numero && (
                <p className="text-xs text-red-600 mt-1">
                  {erro.numero.message}
                </p>
              )}
            </div>

           
            <div className="md:col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bairro
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-md transition
                  focus:outline-none focus:ring-2
                  ${
                    erro.bairro
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-200"
                  }`}
                {...formulario.register("bairro")}
              />
              {erro.bairro && (
                <p className="text-xs text-red-600 mt-1">
                  {erro.bairro.message}
                </p>
              )}
            </div>

            <div className="md:col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cidade
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-md transition
                  focus:outline-none focus:ring-2
                  ${
                    erro.cidade
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-200"
                  }`}
                {...formulario.register("cidade")}
              />
              {erro.cidade && (
                <p className="text-xs text-red-600 mt-1">
                  {erro.cidade.message}
                </p>
              )}
            </div>

        
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UF
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-md uppercase transition
                  focus:outline-none focus:ring-2
                  ${
                    erro.uf
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-200"
                  }`}
                maxLength={2}
                {...formulario.register("uf")}
              />
              {erro.uf && (
                <p className="text-xs text-red-600 mt-1">
                  {erro.uf.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="reset"
              className="px-5 py-2 border border-gray-300 rounded-md
                         text-gray-600 hover:bg-gray-100 transition"
            >
              Limpar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-pink-400 text-white rounded-md
                         hover:bg-pink-500 transition"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-4">
          Endereços Cadastrados
        </h2>

        {enderecos.length === 0 ? (
          <p className="text-gray-500">
            
          </p>
        ) : (
          <ul className="space-y-3">
            {enderecos.map((endereco, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
              >
                <p className="font-medium text-gray-800">
                  {endereco.rua}, {endereco.numero}
                </p>
                <p className="text-sm text-gray-600">
                  {endereco.bairro} – {endereco.cidade}/{endereco.uf}
                </p>
                <p className="text-xs text-gray-500">
                  CEP: {endereco.cep}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
