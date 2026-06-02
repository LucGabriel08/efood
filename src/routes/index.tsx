import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
