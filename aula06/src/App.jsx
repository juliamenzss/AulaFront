import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicial from "./pages/Inicial"
import DpoLgpd from "./pages/DpoLgpd"
import Noticias from "./pages/Noticias"

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/dpo-lgpd" element={<DpoLgpd />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/faculdade" element={<Faculdade />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
