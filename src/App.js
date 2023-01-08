import * as React from "react"
import './App.css';
import {Routes,Route} from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Jogo from "./pages/Jogo/Jogo"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<PaginaInicial />} />
        <Route path="jogo" element={<Jogo/>}/>
      </Routes>
    </div>
  );
}

export default App;
