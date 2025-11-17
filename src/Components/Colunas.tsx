import Tarefas from "./Tarefas";

type Task = {
    id: number;
    titulo: string;
    descricao: string;
}

type ColunaProps= {
    categoria: string;
    tasks: Task[]; 
}

export default function Coluna({ categoria, tasks }: ColunaProps) {
    
    return (
        <div className="flex flex-col items-center m-5 w-90 bg-blue-100">
            <div className={`bg-blue-400 text-black w-full h-10 font-bold p-1 mb-5 flex items-center justify-between`}>
                <p>{categoria} ({tasks.length})</p>
            </div>
            <div className="w-fit">
                {tasks.map(task => (
                    <Tarefas 
                        key={task.id} 
                        id={task.id} 
                        titulo={task.titulo} 
                        descricao={task.descricao}
                    />
                ))}

                {tasks.length === 0 && (
                     <p className="p-2 text-gray-600 italic">Nenhuma tarefa aqui.</p>
                )}
            </div>
        </div>
    )
}