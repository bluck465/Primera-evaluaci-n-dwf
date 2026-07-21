import SearchBar from './SearchBar'

export default function Header({ search, onSearchChange }) {
  return (
    <header className="bg-[#0a0a0a] border-b border-[#222222] h-14 flex items-center justify-between px-6 shrink-0 z-10">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-1.5">
          <span className="w-3 h-3 rounded-full bg-[#333333]" />
          <span className="w-3 h-3 rounded-full bg-[#555555]" />
          <span className="w-3 h-3 rounded-full bg-[#888888]" />
        </div>
        <div className="h-4 w-[1px] bg-[#222222]" />
        <div className="text-xs font-mono tracking-wider">
          <span className="text-white font-bold">DEVTOOLS ACADEMY</span>
          <span className="text-[#a3a3a3] ml-2">// GUÍA ESTRUCTURADA DE DEPURACIÓN</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SearchBar value={search} onChange={onSearchChange} />
        <span className="text-[9px] bg-neutral-900 text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded font-mono">STABLE v2.0</span>
      </div>
    </header>
  )
}
