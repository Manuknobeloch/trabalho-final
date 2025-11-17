import { Link } from "react-router-dom"; 

type TaskCategory = "Para fazer" | "Em andamento" | "Pronto"; 
type TarefasProps = {
  id: number | string; 
  titulo: string;
  descricao: string; 
  category: TaskCategory; 
  onMoveTask: (taskId: number | string, newCategory: TaskCategory) => void;
};

export default function Tarefas(props: TarefasProps) {
  const moveRight = () => {
    const order: TaskCategory[] = ["Para fazer", "Em andamento", "Pronto"];
    const currentIndex = order.indexOf(props.category);
    const nextIndex = currentIndex + 1;
    
<<<<<<< HEAD
    if (nextIndex < order.length) {
      props.onMoveTask(props.id, order[nextIndex]);
    }
  };

  const moveLeft = () => {
    const order: TaskCategory[] = ["Para fazer", "Em andamento", "Pronto"];
    const currentIndex = order.indexOf(props.category);
    const prevIndex = currentIndex - 1;
    
    if (prevIndex >= 0) {
      props.onMoveTask(props.id, order[prevIndex]);
    }
  };

  return (
    <div id="box" className="bg-white border border-gray-100 shadow-md w-80 mb-2 p-2">
      <p>#{props.id}</p>
      <p className="font-semibold">{props.titulo}</p>
      <p>{props.descricao}</p>
      
      <div className="flex justify-between items-center m-1 mt-2">
        <Link to={`/editar-tarefa/${props.id}`}> 
            <button className="text-xs text-purple-600 hover:text-purple-800 font-medium p-1 border rounded">
                Editar
            </button>
        </Link>
        
        <div className="flex gap-2">
            <button onClick={moveLeft} disabled={props.category === "Para fazer"}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-600 hover:text-blue-800 disabled:text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button onClick={moveRight} disabled={props.category === "Pronto"}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-600 hover:text-blue-800 disabled:text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  )
=======
    return (
            <div id="box" className="bg-white border border-gray-100 shadow-md w-80 mb-2 p-2">
                <p>#{props.id}</p>
                <p>{props.titulo}</p>
                <p>{props.descricao}</p>
                <div className="flex justify-between m-1">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                </div>
            </div>
    )
>>>>>>> 255bfb645eea1c536f74626a8c2c6bb7573aba2e
}