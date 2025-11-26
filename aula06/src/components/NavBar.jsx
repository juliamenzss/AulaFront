import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicial</Link><br />
      <Link to="/contato">Contato</Link><br />
      <Link to="/a-faculdade">Faculdade</Link><br />
      <Link to="/dpo-lgpd">DPO Lgbd</Link><br />
      <Link to="/noticias">Notícias</Link><br />
    </nav>
  )
}

export default NavBar
