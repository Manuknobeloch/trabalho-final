import { Link } from "react-router-dom";

type TaskCategory = "Para fazer" | "Em andamento" | "Pronto";

type TarefasProps = {
  id: number;
  titulo: string;
  descricao: string;
  category: TaskCategory;
};

export default function Tarefas(props: TarefasProps) {
  const moveRight = () => {
    const order: TaskCategory[] = ["Para fazer", "Em andamento", "Pronto"];
    const currentIndex = order.indexOf(props.category);
    const nextIndex = currentIndex + 1;
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
        <button>
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

        <button>
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
      </div>
    </div>
  );
}
