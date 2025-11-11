import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
            <button className="text-sm px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Criar Tarefas
            </button>
          </div>

        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <div className="pt-2 border-t mt-2 flex flex-col gap-2">
              <button className="w-full text-left px-2 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                Criar Tarefas
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
