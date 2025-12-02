import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center gap-2 text-lg font-semibold">
              
              <img
                src="https://img.freepik.com/vetores-premium/simbolo-do-icone-do-sono-de-uma-pessoa-dormindo-descansando-na-cama-em-um-travesseiro_855620-567.jpg"
                alt="Logo"
                className="w-15 h-15 rounded"
              />

              Depois Eu Faço
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to={'/criar-tarefa'}>
              <button className="w-full text-left px-2 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                Criar Tarefas
              </button>
              </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
