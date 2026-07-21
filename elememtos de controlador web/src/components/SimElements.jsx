export default function SimElements({ mockBg, mockText, onBgChange, onHighlight }) {
  return (
    <div className="p-3 text-xs font-mono space-y-3 overflow-y-auto flex-1">
      <p className="text-neutral-500 text-[10px]">// Haz clic en la etiqueta para simular una inspección</p>
      <div className="space-y-1 bg-[#0a0a0a] p-2 rounded border border-neutral-900">
        <div className="text-neutral-600">&lt;div <span className="text-neutral-400">id</span>=<span className="text-white">&quot;app&quot;</span>&gt;</div>
        <div
          className="pl-4 cursor-pointer hover:bg-neutral-900 p-1 rounded transition-all"
          onClick={onHighlight}
        >
          <span className="text-neutral-600">&lt;div <span className="text-neutral-400">id</span>=<span className="text-white">&quot;mockElement&quot;</span>&gt;</span>
          <div className="pl-4 text-white">&lt;h3&gt;<span id="simDomText">{mockText}</span>&lt;/h3&gt;</div>
          <span className="text-neutral-600">&lt;/div&gt;</span>
        </div>
        <div className="text-neutral-600">&lt;/div&gt;</div>
      </div>

      <div className="bg-[#0e0e0e] p-2 rounded text-[11px] border border-[#222222] space-y-1">
        <span className="text-neutral-500 font-bold block">// Modificador CSS en Tiempo Real:</span>
        <div className="text-neutral-400 flex justify-between items-center mt-2">
          <span>background-color:</span>
          <select
            value={mockBg}
            onChange={e => onBgChange(e.target.value)}
            className="bg-black text-white border border-[#222222] rounded text-[10px] px-2 py-0.5 focus:outline-none"
          >
            <option value="#111">Negro Mate (#111)</option>
            <option value="#e5e5e5">Gris Claro (#e5e5e5)</option>
            <option value="#ffffff">Blanco Puro (#fff)</option>
            <option value="#333333">Gris Carbón (#333)</option>
          </select>
        </div>
      </div>
    </div>
  )
}
