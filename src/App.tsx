import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { CriarTarefa } from "./Pages/CriarTarefa";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/criar-tarefa" element={<CriarTarefa />} />
      </Routes>
    </div>
  );
}
