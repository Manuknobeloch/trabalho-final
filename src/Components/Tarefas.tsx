import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type TaskCategory = "Para fazer" | "Em andamento" | "Pronto";

type TarefasProps = {
  id: number;
  titulo: string;
  descricao: string;
  categoria: TaskCategory;
  onDeleteTarefa: (id: number) => void;
  onMoveTarefa: (id: number) => void;
  onAtualizarTarefa: (id: number) => void;
};

export default function Tarefas(props: TarefasProps) {
  const navigate = useNavigate();

  const moveRight = async () => {
    const order: TaskCategory[] = ["Para fazer", "Em andamento", "Pronto"];
    const currentIndex = order.indexOf(props.categoria);
    const nextIndex = currentIndex + 1;
    const resposta = await fetch(`https://pacaro-tarefas.netlify.app/api/manuela-knobeloch/tasks/${props.id}/update-step`, {
      method: 'PATCH',
      body: JSON.stringify({ step: order[nextIndex] }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    props.onMoveTarefa();
  };

  const moveLeft = async () => {
    const order: TaskCategory[] = ["Para fazer", "Em andamento", "Pronto"];
    const currentIndex = order.indexOf(props.categoria);
    const nextIndex = currentIndex - 1;
    const resposta = await fetch(`https://pacaro-tarefas.netlify.app/api/manuela-knobeloch/tasks/${props.id}/update-step`, {
      method: 'PATCH',
      body: JSON.stringify({ step: order[nextIndex] }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    props.onMoveTarefa();
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    const resposta = await fetch(`https://pacaro-tarefas.netlify.app/api/manuela-knobeloch/tasks/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { id } = await resposta.json();
    console.log("Tarefa deletada");
    props.onDeleteTarefa(id)
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/editar-tarefa/${props.id}`);
  };

  return (
    <div
      id="box"
      className="bg-white border border-gray-100 shadow-md w-80 mb-2 p-2"
    >
      <p>#{props.id}</p>
      <p>{props.titulo}</p>
      <p>{props.descricao}</p>

      <div className="flex justify-between m-1">
        <button onClick={moveLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button onClick={moveRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="flex items-center gap-1">
          <button onClick={handleDelete} className="p-2 bg-red-400 hover:bg-red-700 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673A2.25 2.25 0 0 1 15.916 22H8.084a2.25 2.25 0 0 1-2.244-2.327L5.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916C16.25 3.343 15.407 2.5 14.37 2.5h-4.74c-1.037 0-1.88.843-1.88 1.877V5m7.5 0h-7.5"
              />
            </svg>
          </button>

          <button onClick={handleUpdate} className="p-2 bg-blue-400 hover:bg-blue-700 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0112.75-5.303M19.5 12a7.5 7.5 0 01-12.75 5.303M12 6v6l3 3"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
