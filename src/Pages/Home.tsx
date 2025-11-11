import Header from "../Components/Header";
import Coluna from "../Components/Colunas";

export default function Home() {
    return (
        <div>
            <Header/>
            <div className="flex justify-center">
                <Coluna categoria={"Para fazer"} corFundo={"bg-red-200"} corCirculo={"red-200"} corTitulo={"black"}/>
                <Coluna categoria={"Em andamento"} corFundo={"bg-yellow-200"}  corCirculo={"yellow-200"} corTitulo={"black"}/>
                <Coluna categoria={"Pronto"} corFundo={"bg-green-200"} corCirculo={"greeng-200"} corTitulo={"black"}/>
            </div>
        </div>
    );
}

