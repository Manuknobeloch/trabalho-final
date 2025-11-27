import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { CriarTarefa } from "./Pages/CriarTarefa";
import EditarTarefa from './Pages/EditarTarefas';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/criar-tarefa" element={<CriarTarefa />} />
        <Route path="/editar-tarefa/:id" element={<EditarTarefa />} />
      </Routes>
    </div>
  );
}
