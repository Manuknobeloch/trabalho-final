import Tarefas from "./Tarefas";

type ColunaProps= {
    categoria: string;
}

export default function Coluna(props: ColunaProps) {
    
    return (
        <div className="flex flex-col items-center m-5 w-90 bg-blue-100">
            <div className={`bg-blue-400 text-black w-full h-10 font-bold p-1 mb-5 flex items-center justify-between`}>
                <p>{props.categoria}</p>
            </div>
            <div className="w-fit">
                <Tarefas id={1} titulo={"oi"} descricao={"oi"}/>
                <Tarefas id={2} titulo={"oi"} descricao={"oi"}/>
                <Tarefas id={3} titulo={"oi"} descricao={"oi"}/>
            </div>
        </div>
    )
}