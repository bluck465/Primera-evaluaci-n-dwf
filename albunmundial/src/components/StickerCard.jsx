import { motion } from 'framer-motion';
import { Star, Copy } from 'lucide-react';
import { getTeamInfo } from '../data/players';

const RARITY_STYLES = {
  bronze: { cls: 'card-bronze', label: 'Común' },
  silver: { cls: 'card-silver', label: 'Poco Común' },
  gold:   { cls: 'card-gold',   label: 'Rara' },
  legend: { cls: 'card-legend', label: 'Leyenda' },
};

export default function StickerCard({ player, count }) {
  const style = RARITY_STYLES[player.rarity] || RARITY_STYLES.bronze;
  const isOwned = count >= 1;
  const dupes = Math.max(0, count - 1);
  const team = getTeamInfo(player.team);

  return (
    <motion.div
      className={`sticker ${isOwned ? 'sticker-owned' : 'sticker-missing'} ${style.cls}`}
      layout
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {isOwned ? (
        <div className="sticker-face">
          <div className="sticker-flag">{team.flag}</div>
          <div className="sticker-team">{player.team}</div>
          <div className={`sticker-badge ${style.cls}-badge`}>
            {player.rarity === 'legend' && <Star size={12} className="sticker-star" />}
            <span>{style.label}</span>
          </div>
          <div className="sticker-number">#{player.id}</div>
          <h3 className="sticker-name">{player.name}</h3>
          {dupes > 0 && (
            <div className="sticker-dupes">
              <Copy size={12} />
              <span>x{dupes}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="sticker-empty">
          <div className="sticker-qmark">?</div>
          <div className="sticker-number muted">#{player.id}</div>
          <div className="sticker-team muted">{player.team}</div>
        </div>
      )}
    </motion.div>
  );
}
