export default function Header({ searchTerm, onSearchChange, onRefresh }) {
  return (
    <>
      <div className="header-top">
        <div className="brand">
          <div className="brand-mark">M</div>
          <div className="brand-info">
            <h1>MARKET_DEV</h1>
            <p>Frontend de tienda con diagnóstico y API modular.</p>
          </div>
        </div>
        <span className="badge">API-READY</span>
      </div>

      <div className="search-row">
        <div className="input-group" style={{ flex: 1 }}>
          <input
            value={searchTerm}
            onChange={event => onSearchChange(event.target.value)}
            type="text"
            placeholder="Buscar productos por título..."
          />
        </div>
        <button className="button" onClick={onRefresh}>Actualizar</button>
      </div>
    </>
  );
}
