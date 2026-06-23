import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { PLAYERS, TEAMS, getPlayersByTeam } from './data/players';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TeamGroup from './components/TeamGroup';
import PackModal from './components/PackModal';

const STORAGE_KEY = 'wc-album-data';

function loadCollection() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

export default function App() {
  const [collection, setCollection] = useState(loadCollection);
  const [packResult, setPackResult] = useState(null);
  const [filters, setFilters] = useState({ team: null, rarity: null, search: '' });
  const [showComplete, setShowComplete] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
  }, [collection]);

  const ownedCount = useMemo(
    () => PLAYERS.filter(p => (collection[p.id] || 0) >= 1).length,
    [collection]
  );

  const totalDupes = useMemo(
    () => Object.values(collection).reduce((s, c) => s + Math.max(0, c - 1), 0),
    [collection]
  );

  const progress = Math.round((ownedCount / PLAYERS.length) * 100);
  const isComplete = ownedCount === PLAYERS.length;

  useEffect(() => {
    if (isComplete) setShowComplete(true);
    if (!isComplete) setShowComplete(false);
  }, [isComplete]);

  const filteredTeams = useMemo(() => {
    return TEAMS.filter(t => {
      if (filters.team && t.id !== filters.team) return false;
      const teamPlayers = getPlayersByTeam(t.id);
      return teamPlayers.some(p => {
        if (filters.rarity && p.rarity !== filters.rarity) return false;
        if (filters.search && !p.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
        return true;
      });
    });
  }, [filters]);

  const handleOpenPack = () => {
    const drawn = Array.from({ length: 5 }, () => PLAYERS[Math.floor(Math.random() * PLAYERS.length)]);
    const snapshot = { ...collection };
    setPackResult({ cards: drawn, prevCollection: snapshot });
    setCollection(prev => {
      const next = { ...prev };
      drawn.forEach(c => { next[c.id] = (next[c.id] || 0) + 1; });
      return next;
    });
  };

  const handleRecycle = () => {
    if (totalDupes < 5) return;
    setCollection(prev => {
      const next = { ...prev };
      let rem = 5;
      for (const id of Object.keys(next)) {
        const dupes = Math.max(0, next[id] - 1);
        if (dupes <= 0) continue;
        const remove = Math.min(dupes, rem);
        next[id] -= remove;
        rem -= remove;
        if (rem <= 0) break;
      }
      return next;
    });
    handleOpenPack();
  };

  return (
    <div className="app">
      <Header
        progress={progress}
        ownedCount={ownedCount}
        total={PLAYERS.length}
        totalDupes={totalDupes}
        onOpenPack={handleOpenPack}
        onRecycle={handleRecycle}
        canRecycle={totalDupes >= 5}
      />

      <FilterBar filters={filters} onChange={setFilters} />

      <main className="album">
        {filteredTeams.map(team => (
          <TeamGroup
            key={team.id}
            team={team}
            collection={collection}
            filter={filters}
          />
        ))}
        {filteredTeams.length === 0 && (
          <div className="album-empty">
            <Trophy size={48} />
            <p>No se encontraron jugadores con esos filtros</p>
          </div>
        )}
      </main>

      <AnimatePresence>
        {packResult && (
          <PackModal
            cards={packResult.cards}
            prevCollection={packResult.prevCollection}
            onClose={() => setPackResult(null)}
          />
        )}
      </AnimatePresence>

      {showComplete && (
        <div className="completion-overlay" onClick={() => setShowComplete(false)}>
          <div className="completion-card" onClick={e => e.stopPropagation()}>
            <Trophy size={64} className="completion-icon" />
            <h2>¡Álbum Completo!</h2>
            <p>Has coleccionado todas las estampas del Mundial 2026</p>
            <button className="btn btn-primary" onClick={() => setShowComplete(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
