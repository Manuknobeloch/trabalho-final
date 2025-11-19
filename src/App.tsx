import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { CriarTarefa } from "./Pages/CriarTarefa";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch(
          "https://pacaro-tarefas.netlify.app/api/manuela-knobeloch/tasks"
        );
        
        const data = await response.json();
        setTasks(data);
        console.log("tarefas:", data);
      } catch (error) {
        console.error("Erro ao carregar tarefas", error);
      }
    }

    loadTasks();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home tasks={tasks}/>}/>
        <Route path="/criar-tarefa" element={<CriarTarefa />} />
      </Routes>
    </div>
  );
}
