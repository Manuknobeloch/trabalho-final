import { useEffect, useState } from "react";
import Contador from "./Components/Contador";

const nums = [1, 2, 3, 4, 5];

export default function App() {
  const [tasks, setTasks] = useState([]);

  async function carregaTarefas() {
    const resposta = await fetch(
      "https://pacaro-tarefas.netlify.app/api/manuela-knobeloch/tasks"
    );
    const tarefas = await resposta.json();
    setTasks(tarefas);
  }

  useEffect(() => {
    carregaTarefas();
  }, []);

  const listaTasks = tasks.map((task) => {
    return <ItemLista description={task.description} />;
  });

  return (
    <div>
      <Contador />
    </div>
  );
}

type ItemListaProps = {
  description: string;
};

function ItemLista({ description }: ItemListaProps) {
  return <li className="py-2">{description}</li>;
}

type ItemNumeroProps = {
  numero: number;
};

function ItemNumero({ numero }: ItemNumeroProps) {
  return <li className="py-2">{numero}</li>;
}
