import { useState, useCallback } from 'react'
import SimElements from './SimElements'
import SimConsole from './SimConsole'
import SimNetwork from './SimNetwork'

const simTabs = [
  { id: 'sim-elements', label: 'Elements' },
  { id: 'sim-console', label: 'Console' },
  { id: 'sim-network', label: 'Network' },
]

export default function Simulator() {
  const [activeTab, setActiveTab] = useState('sim-elements')
  const [mockBg, setMockBg] = useState('#111')
  const [mockTextColor, setMockTextColor] = useState('#fff')
  const [mockHighlight, setMockHighlight] = useState(false)
  const [consoleLogs, setConsoleLogs] = useState([
    { html: '&gt; Consola limpia. Interactúa o digita comandos.' },
  ])
  const [networkLogs, setNetworkLogs] = useState([])

  const addLog = useCallback((log) => {
    setConsoleLogs(prev => [...prev, log])
  }, [])

  const clearConsole = useCallback(() => {
    setConsoleLogs([{ html: '&gt; Consola limpia. Interactúa o digita comandos.' }])
  }, [])

  const handleBgChange = (color) => {
    setMockBg(color)
    setMockTextColor(color === '#ffffff' || color === '#e5e5e5' ? '#000' : '#fff')
    addLog({
      html: `&gt; Modificado propiedad background-color a &quot;${color}&quot;`,
      className: 'text-neutral-400 py-1 border-b border-[#111] italic text-[9px]',
    })
  }

  const handleHighlight = () => {
    setMockHighlight(true)
    setTimeout(() => setMockHighlight(false), 1000)
  }

  const handleSimulatorClick = () => {
    addLog({
      html: `<span class="text-neutral-500">[${new Date().toLocaleTimeString()}]</span> <span class="text-neutral-300">log:</span> Evento registrado con éxito`,
    })
    setMockHighlight(true)
    setTimeout(() => setMockHighlight(false), 100)
  }

  const handleSimulatorNetwork = () => {
    const reqId = `req-${Date.now()}`
    setNetworkLogs(prev => [...prev, { name: 'GET /api/v1/devtools', status: 'Pending...', pending: true, id: reqId }])
    setTimeout(() => {
      setNetworkLogs(prev =>
        prev.map(log =>
          log.id === reqId
            ? { ...log, name: 'GET /api/v1/devtools', status: '200 OK (280ms)', pending: false }
            : log
        )
      )
      addLog({
        html: `<span class="text-neutral-500">[${new Date().toLocaleTimeString()}]</span> <span class="text-neutral-300">fetch:</span> Recurso API cargado en el Sandbox`,
      })
    }, 800)
  }

  const reset = () => {
    setMockBg('#111')
    setMockTextColor('#fff')
    setMockHighlight(false)
    clearConsole()
    setNetworkLogs([])
  }

  return (
    <section className="w-[450px] bg-[#0a0a0a] border-l border-[#222222] flex flex-col justify-between shrink-0 overflow-hidden">
      <div className="bg-[#111111] border-b border-[#222222] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Sandbox de Simulación Sincronizada</span>
        </div>
        <button
          onClick={reset}
          className="text-[10px] font-mono text-gray-500 hover:text-white border border-[#222222] px-2 py-0.5 rounded bg-black transition-all"
        >
          Resetear
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-between p-4 overflow-y-auto space-y-4">
        <div className="border border-[#222222] rounded bg-black overflow-hidden flex flex-col shrink-0">
          <div className="bg-[#0e0e0e] p-2 border-b border-[#222222] flex items-center justify-between text-[10px] text-neutral-500 font-mono">
            <span>🌍 Vista Previa del Sitio de Pruebas</span>
            <span className="text-green-400">v-online</span>
          </div>
          <div className="p-4 space-y-3" id="mockWebpage">
            <div
              id="mockElement"
              className={`p-3 bg-[#111] rounded text-center border border-dashed border-[#222222] transition-all duration-300 ${mockHighlight ? 'scale-105 ring-1 ring-white' : ''}`}
              style={{ backgroundColor: mockBg }}
            >
              <h3 id="mockText" className="text-xs font-bold" style={{ color: mockTextColor }}>
                Consola de Pruebas DOM
              </h3>
              <p className="text-[10px] text-neutral-500 mt-1">Modifica su estilo o simula un log a continuación</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleSimulatorClick}
                className="flex-1 bg-white text-black font-semibold py-1.5 rounded text-[11px] transition-all hover:bg-neutral-200"
              >
                Enviar un Log
              </button>
              <button
                onClick={handleSimulatorNetwork}
                className="flex-1 border border-[#222222] text-white hover:bg-[#111] py-1.5 rounded text-[11px] transition-all"
              >
                Consultar API
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 border border-[#222222] rounded bg-black flex flex-col overflow-hidden min-h-[250px]">
          <div className="bg-[#111111] border-b border-[#222222] flex items-center text-[10px] font-mono text-neutral-500">
            {simTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`sim-tab px-4 py-2 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-black text-white border-b-2 border-white'
                    : 'text-neutral-500 hover:text-white border-r border-[#222222]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'sim-elements' && (
            <SimElements
              mockBg={mockBg}
              mockText="Consola de Pruebas DOM"
              onBgChange={handleBgChange}
              onHighlight={handleHighlight}
            />
          )}

          {activeTab === 'sim-console' && (
            <div className="flex flex-col flex-1 overflow-hidden">
              <div className="p-3 text-xs font-mono space-y-2 overflow-y-auto flex-1">
                <div className="space-y-1 text-[10px] max-h-[160px] overflow-y-auto">
                  {consoleLogs.map((log, i) => (
                    <div
                      key={i}
                      className={log.className || 'text-neutral-500'}
                      dangerouslySetInnerHTML={{ __html: log.html }}
                    />
                  ))}
                </div>
              </div>
              <div className="border-t border-[#222222] px-3 py-2">
                <SimConsole onLog={addLog} onClear={clearConsole} />
              </div>
            </div>
          )}

          {activeTab === 'sim-network' && (
            <SimNetwork logs={networkLogs} />
          )}
        </div>
      </div>

      <div className="bg-[#111] border-t border-[#222222] p-3 text-center text-[10px] text-neutral-500 font-mono">
        Presiona &quot;Resetear&quot; para volver al estado inicial.
      </div>
    </section>
  )
}
