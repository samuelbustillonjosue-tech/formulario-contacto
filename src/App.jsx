import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [mensajeExito, setMensajeExito] = useState('')

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const formularioValido =
    nombre.trim() !== '' &&
    emailValido &&
    mensaje.trim() !== ''

  const enviarFormulario = (e) => {
    e.preventDefault()

    if (!formularioValido) return

    setMensajeExito('¡Gracias por tu mensaje! Carlos se pondrá en contacto contigo.')

    setNombre('')
    setEmail('')
    setMensaje('')
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="bg-linear-to-r from-slate-900 to-indigo-950 p-10 text-center">

          <p className="text-indigo-300 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Hablemos de tu próximo proyecto
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Formulario de contacto
          </h1>

          <p className="text-slate-300">
            ¿Tienes una idea? Me encantaría conocerla.
          </p>

        </div>

        <div className="p-7 md:p-10">

          <form onSubmit={enviarFormulario} className="space-y-6">

            <div>
              <label className="block text-slate-800 font-semibold mb-2">
                Nombre completo
              </label>

              <input
                type="text"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value)
                  setMensajeExito('')
                }}
                placeholder="Escribe tu nombre"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                required
              />
            </div>

            <div>
              <label className="block text-slate-800 font-semibold mb-2">
                Correo electrónico
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setMensajeExito('')
                }}
                placeholder="ejemplo@correo.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                required
              />
            </div>

            <div>
              <label className="block text-slate-800 font-semibold mb-2">
                Mensaje
              </label>

              <textarea
                value={mensaje}
                onChange={(e) => {
                  setMensaje(e.target.value)
                  setMensajeExito('')
                }}
                placeholder="Escribe tu mensaje aquí..."
                rows="5"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!formularioValido}
              className="w-full bg-indigo-700 text-white font-bold py-4 rounded-xl hover:bg-indigo-800 disabled:bg-slate-400 disabled:cursor-not-allowed transition duration-300"
            >
              Enviar mensaje →
            </button>

          </form>

          {mensajeExito && (
            <div className="mt-6 bg-green-50 border border-green-200 text-green-700 text-center font-semibold p-4 rounded-xl">
              ✓ {mensajeExito}
            </div>
          )}

          <div className="border-t border-slate-100 mt-8 pt-6 text-center">
            <p className="text-sm text-slate-400">
              © 2026 Carlos - Diseñador gráfico
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App