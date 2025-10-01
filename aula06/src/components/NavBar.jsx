import React from 'react'

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicial</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/faculdade">Faculdade</Link>
      <Link to="/dpo-lgpd">DPO Lgbd</Link>
      <Link to="/noticias">Notícias</Link>
    </nav>
  )
}

export default NavBar
