import { motion } from 'framer-motion';
import { Package, Recycle, Trophy } from 'lucide-react';

export default function Header({ progress, ownedCount, total, totalDupes, onOpenPack, onRecycle, canRecycle }) {
  const isFull = progress === 100;

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-top">
          <div className="header-title-group">
            <Trophy size={32} className="header-trophy" />
            <div>
              <h1 className="header-title">Mundial 2026</h1>
              <p className="header-subtitle">Álbum de Estampas</p>
            </div>
          </div>

          <div className="header-actions">
            {totalDupes > 0 && (
              <motion.button
                className={`btn btn-recycle ${!canRecycle ? 'btn-disabled' : ''}`}
                onClick={canRecycle ? onRecycle : undefined}
                title={`${totalDupes} repetidas — necesitas 5 para reciclar`}
                whileTap={{ scale: 0.95 }}
              >
                <Recycle size={18} />
                <span className="btn-label">Reciclar ({totalDupes})</span>
              </motion.button>
            )}
            <motion.button
              className="btn btn-primary"
              onClick={onOpenPack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Package size={20} />
              <span className="btn-label">Abrir Sobre</span>
            </motion.button>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-info">
            <span className="progress-text">
              {isFull ? '¡Álbum Completo!' : `${ownedCount} / ${total} estampas`}
            </span>
            <span className="progress-pct">{progress}%</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
