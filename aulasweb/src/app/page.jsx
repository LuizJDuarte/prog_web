// import Image from "next/image";
import styles from "./page.module.css";
// import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import CommentSection from "../components/CommentSection"
import Counter from "../components/Counter"

const posts = [
  {id: 1, titulo:"Titulo 1", texto: "Texto 1"},
  {id: 2, titulo:"Titulo 2", texto: "Texto 2"}
]

export default function Home() {
  return (
    <div className={styles. container}>
      <Counter />
      <main className={styles.mainContent}>
        <h1>O Poder dos Componentes no Next.js</h1>
        <p>Este é o corpo principal do nosso artigo. Aqui discutimos como a arquit</p>
        <p>Cada parte da nossa página, como o cabeçalho, rodapé, barra lateral e a</p>

        <CommentSection />
      </main>
      <Sidebar />
    </div>
  );
}
