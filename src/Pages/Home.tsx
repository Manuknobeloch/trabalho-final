import Header from "../Components/Header";
import Coluna from "../Components/Colunas";
import React from "react";

type Task = {
  id?: string | number;
  titulo?: string;
  descricao?: string;
  category?: string;
  status?: string;
};

export default function Home({
  tasks = [],
}: {
  tasks?: Task[];
}) {
  // garantia: tasks sempre é array
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