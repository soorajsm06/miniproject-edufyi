export default function Navbar({ page, onNavigate }) {
  return <header className="navbar">
    <button className="brand" onClick={() => onNavigate('banking')} aria-label="Apro home"><i></i><strong>apro</strong></button>
    <nav className="nav-links" aria-label="Main navigation">
      <button className={page === 'banking' ? 'active' : ''} onClick={() => onNavigate('banking')}>Banking</button>
      <button className={page === 'productivity' ? 'active' : ''} onClick={() => onNavigate('productivity')}>Productivity</button>
      <button>Resources</button><button>Pricing</button>
    </nav>
    <div className="nav-actions"><button className="login">Log in</button><button className="demo">Request a demo</button><button className="apply">Apply now</button></div>
  </header>
}
