import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

const nome = "Luiz";
const lista = ["Html","Css","Js","React","Next"]

  return (
    <main>
      <h1>Página teste do Next.</h1>
      <h2>Bem vindo {nome}!</h2>

      <ul>
        {lista.map((li) => <li key={li}>{li}</li>)}
      </ul>
    </main>
  );
}
