import { useState } from 'react'

export default function SimConsole({ onLog, onClear }) {
  const [input, setInput] = useState('')

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter' || !input.trim()) return
    const cmd = input.trim()
    const lower = cmd.toLowerCase()

    if (lower === 'clear') {
      onClear()
      setInput('')
      return
    }

    onLog({
      html: `<span class="text-white font-bold mt-1">&gt; ${cmd}</span>`,
    })

    if (lower === 'help') {
      onLog({
        html: 'Comandos de depuraci&oacute;n: <br> - <span class=\'text-white\'>clear</span>: Limpiar consola.<br> - <span class=\'text-white\'>date</span>: Obtener marca temporal.<br> - <span class=\'text-white\'>author</span>: Cr&eacute;ditos de desarrollo.',
      })
    } else if (lower === 'date') {
      onLog({ html: new Date().toString() })
    } else if (lower === 'author') {
      onLog({ html: 'Estudiante DWF Esencial // Academia de Desarrollo Web' })
    } else {
      onLog({
        html: `<span class='text-neutral-500'>Sintaxis No V&aacute;lida:</span> comando no reconocido. Digita 'help'`,
      })
    }
    setInput('')
  }

  return (
    <div className="flex items-center">
      <span className="text-neutral-600 mr-2 font-bold">&gt;</span>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe 'help' o 'date' y pulsa Enter..."
        className="bg-transparent text-white text-[11px] placeholder-neutral-700 focus:outline-none flex-1"
      />
    </div>
  )
}
