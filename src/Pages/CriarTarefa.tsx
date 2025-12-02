import { useState } from "react";
import { useNavigate } from "react-router-dom";

type TaskCategory = "Para fazer" | "Em andamento" | "Pronto";

export function CriarTarefa() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState<TaskCategory>("Para fazer");
  
  const categoriasDisponiveis: TaskCategory[] = [
    "Para fazer",
    "Em andamento",
    "Pronto",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const novaTarefa = {
      title: titulo,
      description: descricao,
      step: categoria,
    };

    await fetch('https://pacaro-tarefas.netlify.app/api/manuela-knobeloch/tasks', {
      method: 'POST',
      body: JSON.stringify(novaTarefa),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("Nova Tarefa Criada:", novaTarefa);
    
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Criar Nova Tarefa
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
              Título
            </label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
              Categoria
            </label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value as TaskCategory)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categoriasDisponiveis.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              id="descricao"
              rows={3}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-150"
          >
            Criar Tarefa
          </button>

        
        </form>
      </div>
    </div>
  );
}