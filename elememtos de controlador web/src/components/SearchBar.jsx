export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Filtrar herramientas..."
        className="bg-[#111] text-xs text-white placeholder-neutral-600 pl-8 pr-3 py-1.5 rounded border border-[#222222] focus:outline-none focus:border-neutral-400 w-56 transition-all duration-300"
      />
      <svg className="w-3.5 h-3.5 absolute left-2.5 top-2 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  )
}
