const moduleGroups = [
  {
    label: 'Módulos Principales',
    items: ['elementos', 'consola', 'fuentes', 'red'],
  },
  {
    label: 'Rendimiento y Diagnóstico',
    items: ['rendimiento', 'memoria'],
  },
  {
    label: 'Herramientas Avanzadas',
    items: ['aplicacion', 'seguridad', 'lighthouse', 'grabadora'],
  },
]

const meta = {
  elementos: { icon: '📦', en: 'Elements' },
  consola: { icon: '💻', en: 'Console' },
  fuentes: { icon: '📁', en: 'Sources' },
  red: { icon: '🌐', en: 'Network' },
  rendimiento: { icon: '⚡', en: 'Performance' },
  memoria: { icon: '🧠', en: 'Memory' },
  aplicacion: { icon: '💾', en: 'Application' },
  seguridad: { icon: '🔒', en: 'Security' },
  lighthouse: { icon: '💡', en: 'Audit' },
  grabadora: { icon: '🔴', en: 'Recorder' },
}

export default function Sidebar({ activeTab, onTabChange, search }) {
  const filteredGroups = moduleGroups
    .map(group => ({
      ...group,
      items: group.items.filter(id => {
        const label = id
        const en = meta[id].en.toLowerCase()
        const q = search.toLowerCase()
        return label.includes(q) || en.includes(q)
      }),
    }))
    .filter(g => g.items.length > 0)

  return (
    <aside className="w-64 bg-[#0a0a0a] border-r border-[#222222] flex flex-col justify-between shrink-0">
      <div className="p-4 overflow-y-auto flex-1 space-y-4">
        {filteredGroups.map(group => (
          <div key={group.label}>
            <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest px-2 mb-2">
              {group.label}
            </p>
            <nav className="space-y-1">
              {group.items.map(id => {
                const isActive = activeTab === id
                const m = meta[id]
                return (
                  <button
                    key={id}
                    onClick={() => onTabChange(id)}
                    className={`tab-btn w-full flex items-center justify-between px-3 py-2 text-xs rounded font-medium transition-all ${
                      isActive
                        ? 'bg-neutral-900 text-white border-l-2 border-white'
                        : 'text-[#a3a3a3] hover:text-white hover:bg-neutral-900 border-l-2 border-transparent'
                    }`}
                  >
                    <span className="flex items-center gap-2"><span>{m.icon}</span> {id.charAt(0).toUpperCase() + id.slice(1)}</span>
                    <span className="text-[9px] font-mono text-neutral-500">{m.en}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        ))}
      </div>

      <div className="p-4 bg-black border-t border-[#222222] text-[11px] space-y-1">
        <div className="flex justify-between text-neutral-400">
          <span>Atajo General:</span>
          <kbd className="bg-neutral-900 border border-neutral-800 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">F12</kbd>
        </div>
        <div className="flex justify-between text-neutral-400">
          <span>Alternativo:</span>
          <kbd className="bg-neutral-900 border border-neutral-800 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">Ctrl+Shift+I</kbd>
        </div>
      </div>
    </aside>
  )
}
