import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { getPlayersByTeam, getTeamInfo } from '../data/players';
import StickerCard from './StickerCard';

export default function TeamGroup({ team, collection, filter }) {
  const teamInfo = getTeamInfo(team.id);
  const players = getPlayersByTeam(team.id).filter(p => {
    if (filter.rarity && p.rarity !== filter.rarity) return false;
    if (filter.search && !p.name.toLowerCase().includes(filter.search.toLowerCase())) return false;
    return true;
  });

  const owned = players.filter(p => (collection[p.id] || 0) >= 1).length;
  const teamComplete = players.length > 0 && owned === players.length;

  return (
    <motion.section
      className="team-group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="team-header">
        <div className="team-header-left">
          <span className="team-flag">{teamInfo.flag}</span>
          <div>
            <h2 className="team-name">{teamInfo.name}</h2>
            <span className="team-count">
              {owned}/{players.length} {teamComplete && <CheckCircle2 size={14} className="team-check" />}
            </span>
          </div>
        </div>
        <div className="team-progress">
          <div className="team-progress-bar">
            <div
              className="team-progress-fill"
              style={{ width: `${players.length ? (owned / players.length) * 100 : 0}%` }}
            />
          </div>
        </div>
      </div>

      <div className="team-grid">
        {players.map(p => (
          <StickerCard
            key={p.id}
            player={p}
            count={collection[p.id] || 0}
          />
        ))}
      </div>
    </motion.section>
  );
}
