export type Task = {
  id: number;
  title: string;
  description: string;
  step: "Para fazer" | "Em andamento" | "Pronto"; 
};