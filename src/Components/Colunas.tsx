import Tarefas from "./Tarefas";
import type { Task } from "../types";

type ColunaProps= {
    categoria: string;
    tasks: Task[]; 
    onDeleteTarefa: (id: number)=> void;
    onMoveTarefa: (id: number)=> void;
    onAtualizarTarefa: (id: number) => void;
}

export default function Coluna(props: ColunaProps) {
    console.log("oiii", props.tasks);
    return (
        <div className="flex flex-col items-center m-5 w-full mb-4 md:flex-1 md:w-auto bg-blue-100">
            <div className={`bg-blue-400 text-black w-full h-10 font-bold p-1 mb-5 flex items-center justify-between`}>
                <p>{props.categoria} ({props.tasks.length})</p>
            </div>
            <div className="w-fit">
                {props.tasks.map(task => (
                    <Tarefas 
                        key={task.id} 
                        id={task.id} 
                        titulo={task.title} 
                        descricao={task.description}
                        categoria={task.step}
                        onDeleteTarefa={props.onDeleteTarefa}
                        onMoveTarefa={props.onMoveTarefa}
                        onAtualizarTarefa={props.onAtualizarTarefa}
                    />
                ))}

                {props.tasks.length === 0 && (
                     <p className="p-2 text-gray-600 italic">Nenhuma tarefa aqui.</p>
                )}
            </div>
        </div>
    )
}