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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">
          Cadastro de Endereços
        </h1>

       
        <form
          onSubmit={formulario.handleSubmit(enviaFormulario)}
          noValidate
          className="w-full"
        >
          <div className="grid grid-cols-12 gap-4">
          
            <div className="col-span-12 md:col-span-6 flex flex-col relative">
              <label className="text-sm font-medium mb-1">CEP</label>
              <input
                className="input"
                {...formulario.register("cep")}
              />
              {formulario.formState.errors.cep && (
                <p className="erro">
                  {formulario.formState.errors.cep.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col relative">
              <label className="text-sm font-medium mb-1">Rua</label>
              <input
                className="input"
                {...formulario.register("rua")}
              />
              {formulario.formState.errors.rua && (
                <p className="erro">
                  {formulario.formState.errors.rua.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col relative">
              <label className="text-sm font-medium mb-1">Número</label>
              <input
                className="input"
                {...formulario.register("numero")}
              />
              {formulario.formState.errors.numero && (
                <p className="erro">
                  {formulario.formState.errors.numero.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col relative">
              <label className="text-sm font-medium mb-1">Bairro</label>
              <input
                className="input"
                {...formulario.register("bairro")}
              />
              {formulario.formState.errors.bairro && (
                <p className="erro">
                  {formulario.formState.errors.bairro.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col relative">
              <label className="text-sm font-medium mb-1">Cidade</label>
              <input
                className="input"
                {...formulario.register("cidade")}
              />
              {formulario.formState.errors.cidade && (
                <p className="erro">
                  {formulario.formState.errors.cidade.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-2 flex flex-col relative">
              <label className="text-sm font-medium mb-1">UF</label>
              <input
                className="input uppercase"
                {...formulario.register("uf")}
              />
              {formulario.formState.errors.uf && (
                <p className="erro">
                  {formulario.formState.errors.uf.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="reset"
              className="px-6 py-2 border rounded-md"
            >
              Limpar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          Endereços Cadastrados
        </h2>

        {enderecos.length === 0 ? (
          <p className="text-gray-500">
            Nenhum endereço cadastrado.
          </p>
        ) : (
          <ul className="space-y-3">
            {enderecos.map((endereco, index) => (
              <li
                key={index}
                className="border p-4 rounded bg-gray-50"
              >
                <p>
                  {endereco.rua}, {endereco.numero} –{" "}
                  {endereco.bairro}
                </p>
                <p>
                  {endereco.cidade}/{endereco.uf} – CEP:{" "}
                  {endereco.cep}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
