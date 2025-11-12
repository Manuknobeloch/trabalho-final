import Header from "../Components/Header";
import Coluna from "../Components/Colunas";
import { useState, useEffect } from "react";

export default function Home() {

 const [tasks, setTasks] = useState([]);

  async function carregaTarefas() {
   const resposta = await fetch(
      "https://pacaro-tarefas.netlify.app/api/duda/tasks"
    );
    const tarefas = await resposta.json();
    setTasks(tarefas);
  }

  useEffect(() => {
    carregaTarefas();
  }, []);

  const listaTasks = tasks.map((task) => {
    return <li>{task.description}</li>;
  });

  //return <ul className="list-disc">{listaTasks}</ul>;

    return (
        <div>
            <Header/>
            {listaTasks}
            <div className="flex justify-center ">
                <Coluna categoria={"Para fazer"}/>
                <Coluna categoria={"Em andamento"}/>
                <Coluna categoria={"Pronto"} />
            </div>
        </div>
    );
}

