import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Task } from "../types";

export default function EditarTarefas () {
  type TaskCategory = Task['step'];
  
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); 
  
  const taskId = id ? parseInt(id) : null; 

  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState<string>("Para fazer");
  
  const categoriasDisponiveis: string[] = ["Para fazer", "Em andamento", "Pronto"];

  useEffect(() => {
    async function fetchTask() {
        if (!taskId) return;

        try {
            const response = await fetch(`https://pacaro-tarefas.netlify.app/api/manuela-knobeloch/tasks/${taskId}`);
            
            if (!response.ok) {
                throw new Error("Tarefa não encontrada");
            }
            const data: Task = await response.json();
            
            setTaskToEdit(data);
            setTitulo(data.title);
            setDescricao(data.description);
            setCategoria(data.step as string);
            
        } catch (error) {
            console.error("Erro ao carregar tarefa:", error);
        }
    }

    fetchTask();
  }, [taskId, navigate]); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskToEdit) return; 

    const tarefaAtualizada = {
        title: titulo, 
        description: descricao,
        step: categoria,
    };

    try {
        const resposta = await fetch(`https://pacaro-tarefas.netlify.app/api/manuela-knobeloch/tasks/${taskToEdit.id}`, {
            method: 'PUT', 
            body: JSON.stringify(tarefaAtualizada),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (resposta.ok) {
            navigate("/"); 
        } else {
            console.error("Falha ao atualizar a tarefa. Status:", resposta.status, "Resposta detalhada:", await resposta.text());
        }
    } catch (error) {
        console.error("Erro na requisição de atualização:", error);
    }
};

  if (!taskToEdit) {
      return (
          <div className="flex justify-center items-center p-4 h-screen">
              <p className="text-xl text-gray-700">Carregando tarefa...</p>
          </div>
      );
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Editar Tarefa 
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
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
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoria</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value as TaskCategory)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categoriasDisponiveis.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição</label>
            <textarea
              id="descricao"
              rows={3}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}