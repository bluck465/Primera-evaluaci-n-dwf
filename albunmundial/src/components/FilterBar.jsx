import { Search, X } from 'lucide-react';
import { TEAMS } from '../data/players';

const RARITIES = [
  { key: null, label: 'Todas' },
  { key: 'bronze', label: 'Común' },
  { key: 'silver', label: 'Poco Común' },
  { key: 'gold', label: 'Rara' },
  { key: 'legend', label: 'Leyenda' },
];

export default function FilterBar({ filters, onChange }) {
  const set = (key, val) => onChange({ ...filters, [key]: val });

  return (
    <div className="filterbar">
      <div className="filterbar-inner">
        <div className="filter-search">
          <Search size={16} className="filter-search-icon" />
          <input
            className="filter-input"
            type="text"
            placeholder="Buscar jugador..."
            value={filters.search}
            onChange={e => set('search', e.target.value)}
          />
          {filters.search && (
            <button className="filter-clear" onClick={() => set('search', '')}>
              <X size={14} />
            </button>
          )}
        </div>

        <div className="filter-group">
          <select
            className="filter-select"
            value={filters.team || ''}
            onChange={e => set('team', e.target.value || null)}
          >
            <option value="">Todas las selecciones</option>
            {TEAMS.map(t => (
              <option key={t.id} value={t.id}>
                {t.flag} {t.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group filter-rarity-group">
          {RARITIES.map(r => (
            <button
              key={r.key || 'all'}
              className={`filter-chip ${filters.rarity === r.key ? 'chip-active' : ''} ${r.key ? `chip-${r.key}` : ''}`}
              onClick={() => set('rarity', r.key)}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
