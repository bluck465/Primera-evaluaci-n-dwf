export default function DocCard({ index, heading, text }) {
  return (
    <div className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-5 flex flex-col justify-between h-56 hover:border-neutral-500 transition-all duration-300">
      <div>
        <span className="text-xs font-mono text-neutral-500 block mb-2">{`// ${index} / ${heading === '¿Qué es?' ? 'DEFINICIÓN' : heading === '¿Para qué se usa?' ? 'CASOS DE USO' : 'VALOR AL DESARROLLADOR'}`}</span>
        <h4 className="font-semibold text-white text-base mb-2">{heading}</h4>
        <p className="text-xs text-neutral-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  )
}
