import Image from "next/image";
import styles from "./page.module.css";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

const posts = [
  {id: 1, titulo:"Titulo 1", texto: "Texto 1"},
  {id: 2, titulo:"Titulo 2", texto: "Texto 2"}
]

export default function Home() {
  return (
    <div>
      <main>
      {posts.map((post)=>(
        <PostCard key={post.id} titulo={post.titulo} texto={post.texto}/>
      ))
      }
      </main>
      <Sidebar />
    </div>
    

  );
}
