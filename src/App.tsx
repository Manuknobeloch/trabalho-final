import { Component, useEffect, useState } from "react";
import Contador from "./Components/Contador";

export default function App() {
  function quandoInicia() {
    fetch("https://pacaro-tarefas.netlify.app/api/manuela-knobeloch/tasks");
  }

  useEffect(quandoInicia, []);
  
  return (
    <div>
      <Contador />
    </div>
  );
}
