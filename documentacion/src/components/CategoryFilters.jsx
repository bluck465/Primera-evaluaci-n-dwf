import React from 'react'

const FILTERS = [
  { id: 'todos', label: 'Todo el Menú' },
  { id: 'tortas', label: 'Tortas Enteras' },
  { id: 'individuales', label: 'Porciones Individuales' },
  { id: 'copas', label: 'Copas & Vasitos' },
]

export default function CategoryFilters({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {FILTERS.map(f => (
        <button
          key={f.id}
          onClick={() => onSelect(f.id)}
          className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold tracking-wide ${
            selected === f.id
              ? 'bg-purple-600 text-white'
              : 'bg-purple-50/50 text-neutral-600'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
