import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicial from "./pages/Inicial"
import DpoLgpd from "./pages/DpoLgpd"
import Noticias from "./pages/Noticias"
import Contato from "./pages/Contato"
import Faculdade from "./pages/Faculdade"
import NavBar from "./components/NavBar"

const App = () => {
  return (
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/dpo-lgpd" element={<DpoLgpd />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/a-faculdade" element={<Faculdade />} />
        </Routes>
      </BrowserRouter>
  ) 
}

export default App
