import Header from "../Components/Header";
import Coluna from "../Components/Colunas";
import React from "react";

export type Tarefa = {
  id: number;
  title: string;
  description: string;
  step: string;
  category: "Para fazer" | "Em andamento" | "Pronto"; 
};

type HomeProps = {
  tasks: Tarefa[];
};

export default function Home(props: HomeProps) {
  const { tasks } = props;


  const safeTasks = Array.isArray(tasks) ? tasks : [];

  return (
    <div>
      <Header />
      <div className="flex justify-center p-4">
        <Coluna
          categoria={"Para fazer"}
          tasks={safeTasks.filter((t) => t.category === "Para fazer")}
        />
        <Coluna
          categoria={"Em andamento"}
          tasks={safeTasks.filter((t) => t.category === "Em andamento")}
        />
        <Coluna
          categoria={"Pronto"}
          tasks={safeTasks.filter((t) => t.category === "Pronto")}
        />
      </div>
    </div>
  );
}