import { useEffect, useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador % 2 > 0) {
      alert("É impar");
    }
  }, [contador]);

  function incrementaContador() {
    setContador(contador + 1);
  }

  function decrementaContador() {
    setContador(contador - 1);
  }

  return (
    <div className="p-4">
      <button
        onClick={decrementaContador}
        className="bg-orange-600 p-2 text-white border border-gray-700"
      >
        -
      </button>
      <input
        type="text"
        value={contador}
        className="border border-gray-700 p-2"
      />
      <button
        onClick={incrementaContador}
        className="bg-orange-600 p-2 text-white border border-gray-700"
      >
        +
      </button>
    </div>
  );
}
