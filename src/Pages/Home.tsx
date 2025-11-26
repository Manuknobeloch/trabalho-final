import Header from "../Components/Header";
import Coluna from "../Components/Colunas";
import { useState, useEffect } from "react";
import type { Task } from "../types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
      <Header />
      <div className="flex justify-center p-4">
        <Coluna
          categoria={"Para fazer"}
          tasks={tasks.filter((t) => t.step === "Para fazer")}
        />
        <Coluna
          categoria={"Em andamento"}
          tasks={tasks.filter((t) => t.step === "Em andamento")}
        />
        <Coluna
          categoria={"Pronto"}
          tasks={tasks.filter((t) => t.step === "Pronto")}
        />
      </div>
    </div>
  );
}