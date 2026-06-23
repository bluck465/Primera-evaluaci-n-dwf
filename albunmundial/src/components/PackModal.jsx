import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Star, Copy, Zap } from 'lucide-react';
import { getTeamInfo } from '../data/players';

const RARITY = {
  bronze: { cls: 'card-bronze', label: 'Común' },
  silver: { cls: 'card-silver', label: 'Poco Común' },
  gold:   { cls: 'card-gold',   label: 'Rara' },
  legend: { cls: 'card-legend', label: 'Leyenda' },
};

export default function PackModal({ cards, prevCollection, onClose }) {
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const startReveal = () => {
    setPhase('shaking');
    setTimeout(() => setPhase('opened'), 700);
    setTimeout(() => setPhase('revealed'), 1100);
  };

  const revealed = phase === 'revealed';
  const canClose = revealed;

  const getRarityClass = (card) => RARITY[card.rarity] || RARITY.bronze;

  return (
    <motion.div
      className="pack-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={canClose ? onClose : undefined}
    >
      <div className="pack-modal" onClick={e => e.stopPropagation()}>
        {canClose && (
          <button className="pack-close" onClick={onClose}>
            <X size={32} />
          </button>
        )}

        <AnimatePresence mode="wait">
          {phase === 'idle' && (
            <motion.div
              key="pack-closed"
              className="pack-scene"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <div className="pack-scene-title">
                <Sparkles size={24} />
                <span>Tienes un sobre nuevo</span>
              </div>
              <motion.div
                className="pack-closed"
                onClick={startReveal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="pack-closed-inner">
                  <Zap size={40} className="pack-closed-icon" />
                  <span className="pack-closed-text">TOCA PARA ABRIR</span>
                  <span className="pack-closed-sub">Mundial 2026</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {phase === 'shaking' && (
            <motion.div
              key="pack-shaking"
              className="pack-scene"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="pack-closed"
                animate={{
                  x: [-6, 6, -8, 8, -5, 5, 0],
                  rotate: [0, -3, 3, -4, 4, -2, 0],
                  scale: [1, 1.02, 0.98, 1.02, 0.98, 1]
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <div className="pack-closed-inner">
                  <Zap size={40} className="pack-closed-icon pack-shake-icon" />
                  <span className="pack-closed-text">ABRIENDO...</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {phase === 'opened' && (
            <motion.div
              key="pack-burst"
              className="pack-scene"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="pack-burst"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {[0, 1, 2, 3, 4].map(i => (
                  <motion.div
                    key={i}
                    className="pack-burst-particle"
                    style={{
                      background: ['#8b5cf6', '#eab308', '#a855f7', '#f59e0b', '#6366f1'][i],
                      width: 8 + i * 4,
                      height: 8 + i * 4,
                    }}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: [0, (i - 2) * 80 * (1 + Math.random())],
                      y: [0, (i % 2 === 0 ? -1 : 1) * 60 * (1 + Math.random())],
                      opacity: [1, 0],
                      scale: [1, 0]
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                ))}
                <Sparkles size={48} className="pack-burst-icon" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {revealed && (
          <motion.div
            className="pack-reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="pack-title">
              <Sparkles size={24} />
              ¡Nuevas Estampas!
            </h2>

            <div className="pack-grid">
              {cards.map((card, i) => {
                const style = getRarityClass(card);
                const team = getTeamInfo(card.team);
                const alreadyOwned = (prevCollection[card.id] || 0) >= 1;
                const isNew = !alreadyOwned;

                return (
                  <motion.div
                    key={`${card.id}-${i}`}
                    className={`pack-card ${style.cls}`}
                    initial={{ rotateY: 180, scale: 0, y: 60 }}
                    animate={{ rotateY: 0, scale: 1, y: 0 }}
                    transition={{
                      delay: i * 0.15,
                      type: 'spring',
                      stiffness: 150,
                      damping: 16
                    }}
                  >
                    <div className="pack-card-inner">
                      {!isNew && (
                        <div className="pack-dupe-badge">
                          <Copy size={10} />
                          Repetida
                        </div>
                      )}
                      <div className="pack-card-flag">{team.flag}</div>
                      <div className="pack-card-team">{card.team}</div>
                      <div className={`pack-card-rarity ${style.cls}-badge`}>
                        {card.rarity === 'legend' && <Star size={11} />}
                        {style.label}
                      </div>
                      <div className="pack-card-number">#{card.id}</div>
                      <h3 className="pack-card-name">{card.name}</h3>
                      {isNew && (
                        <motion.div
                          className="pack-new-badge"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.15 + 0.3, type: 'spring' }}
                        >
                          ¡NUEVA!
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              className="pack-continue"
              onClick={onClose}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continuar
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
