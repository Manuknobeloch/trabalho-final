import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


type Task = {
  id: number;
  title: string;
  description: string;
  step: string;
  category: "Para fazer" | "Em andamento" | "Pronto"; 
};

type EditarProps = {
  tasks: Task[];
};

export default function EditarTarefas (props: EditarProps) {
  type OnTaskUpdated = (t: Task) => void | Promise<void>;
  type TaskCategory = Task['category'];
  
  const {tasks} = props;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); 

  const taskToEdit = tasks.find(t => String(t.id) === id);

  const [titulo, setTitulo] = useState(taskToEdit?.title || "");
  const [descricao, setDescricao] = useState(taskToEdit?.description || "");
  const [categoria, setCategoria] = useState<string>(
    (taskToEdit?.category as string) || "Para fazer"
  );
  
  const categoriasDisponiveis: string[] = ["Para fazer", "Em andamento", "Pronto"];

  useEffect(() => {
    if (taskToEdit) {
      setTitulo(taskToEdit.title);
      setDescricao(taskToEdit.description);
      setCategoria(taskToEdit.category as string);
    } else if (id && tasks.length > 0) {
        navigate("/");
    }
  }, [taskToEdit, id, tasks, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskToEdit || !onTaskUpdated) return; 

    const tarefaAtualizada: Task = {
        id: taskToEdit.id,
        title: titulo, 
        description: descricao,
        step: taskToEdit.step,
        category: string, 
    };

    await onTaskUpdated(tarefaAtualizada);
    navigate("/");
};

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