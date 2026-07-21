const initialLogs = [
  { name: 'index.html', status: '200 OK (1.8 KB)' },
  { name: 'script.js', status: '304 Cached' },
]

export default function SimNetwork({ logs }) {
  const allLogs = [...initialLogs, ...logs]

  return (
    <div className="p-3 text-xs font-mono space-y-2 overflow-y-auto flex-1">
      <div className="text-[10px] text-neutral-500 border-b border-[#222222] pb-1 flex justify-between">
        <span>Archivo / Endpoint</span>
        <span>Estado / Tamaño</span>
      </div>
      <div id="networkLogs" className="space-y-1 text-[10px]">
        {allLogs.map((log, i) => (
          <div key={i} className="flex justify-between text-neutral-500">
            <span>{log.name}</span>
            <span className="text-neutral-300">{log.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
