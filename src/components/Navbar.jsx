export default function Navbar() {
  return <header className="navbar">
    <a className="brand" href="/" aria-label="Apro home"><i></i><strong>apro</strong></a>
    <nav className="nav-links" aria-label="Main navigation">
      <a className="active" href="#products">Products</a><a href="#resources">Resources</a><a href="#pricing">Pricing</a><a href="#blog">Blog</a>
    </nav>
    <div className="nav-actions"><button className="login">Log in</button><button className="demo">Request a demo</button><button className="apply">Apply now</button></div>
  </header>
}
