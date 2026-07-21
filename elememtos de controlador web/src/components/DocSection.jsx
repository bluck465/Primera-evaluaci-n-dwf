import DocCard from './DocCard'

export default function DocSection({ section, isActive }) {
  if (!isActive) return null

  return (
    <section className="space-y-6">
      <div className="border-b border-[#222222] pb-4 flex items-center justify-between">
        <div>
          <span className="text-xs text-neutral-500 font-mono tracking-wider uppercase">
            Pestaña {section.tab} // {section.subtitle}
          </span>
          <h2 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
            {section.icon} {section.title}
          </h2>
        </div>
        <span className="text-xs font-mono text-neutral-500">{section.url}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {section.cards.map((card, i) => (
          <DocCard key={i} {...card} />
        ))}
      </div>
    </section>
  )
}
