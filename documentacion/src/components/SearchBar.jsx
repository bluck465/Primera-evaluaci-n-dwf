import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full md:w-80">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        type="text"
        placeholder="Buscar postre de ensueño..."
        className="w-full pl-4 pr-4 py-3 rounded-2xl bg-neutral-50 border text-sm font-semibold"
      />
    </div>
  )
}
