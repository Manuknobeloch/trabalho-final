import Header from "../Components/Header";
import Coluna from "../Components/Colunas";
import { useState, useEffect } from "react";
import type { Task } from "../types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <Header />
      <Kanban tasks={tasks} onDeleteTarefa={() => loadTasks()} onMoveTarefa={() => loadTasks()} onAtualizarTarefa={() => loadTasks()} />
    </div>
  );
}

export type KanbanProps = {
  tasks: Task[];
  onDeleteTarefa: (id: number) => void;
  onMoveTarefa: (id: number) => void;
  onAtualizarTarefa: (id: number) => void;
}

function Kanban({ tasks, onDeleteTarefa, onMoveTarefa, onAtualizarTarefa } : KanbanProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center p-4 md:space-x-4">
      <Coluna
        categoria={"Para fazer"}
        tasks={tasks.filter((t) => t.step === "Para fazer")}
        onDeleteTarefa={onDeleteTarefa}
        onMoveTarefa={onMoveTarefa}
        onAtualizarTarefa={onAtualizarTarefa}
      />
      <Coluna
        categoria={"Em andamento"}
        tasks={tasks.filter((t) => t.step === "Em andamento")}
        onDeleteTarefa={onDeleteTarefa}
        onMoveTarefa={onMoveTarefa}
        onAtualizarTarefa={onAtualizarTarefa}
      />
      <Coluna
        categoria={"Pronto"}
        tasks={tasks.filter((t) => t.step === "Pronto")}
        onDeleteTarefa={onDeleteTarefa}
        onMoveTarefa={onMoveTarefa}
        onAtualizarTarefa={onAtualizarTarefa}
      />
    </div>
  )
}