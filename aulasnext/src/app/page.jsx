'use client';
// import Image from "next/image";
import styles from "./page.module.css";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import CommentSection from "../components/CommentSection"
import Counter from "../components/Counter"
import {useState , useEffect} from 'react';

// Exemplo APIs 
// async function buscarDados(){
//   const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const dados = await resposta.json();
//   console.log(dados);
// }

// Exemplo buscar dados com segurança
// async function buscarDadosSeguranca(){
//   try{
//     const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     if(!resposta.ok) {
//       throw new Error("Erro: "+ resposta.status);
//     }
//     const dados = await resposta.json();
//     console.log(dados);
//   } catch (error){
//     console.error("Algo deu errado!" + error);
//   }
// }

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    async function buscarDadosPosts(){
      try{
        const handleSubmit = async (e) => {
          e.preventDefault();

          const resposta = await fetch('/api/posts',{
            method: 'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({titulo}),
          });

          const result = await resposta.json();
          alert(result.message);
        };
        
        if(!resposta.ok){
          throw new Error("Não foi possível acessar os dados de posts");
        }
        const dados = await resposta.json();
        setPosts(dados);
      } catch(erro){
        console.log(erro.message)
      }
    }

    buscarDadosPosts();
  },[]);

  return (
    <div className={styles. container}>
      {/* <Counter /> */}
      <main className={styles.mainContent}>
        <h1>O Poder dos Componentes no Next.js</h1>
        <p>Este é o corpo principal do nosso artigo. Aqui discutimos como a arquit</p>
        <p>Cada parte da nossa página, como o cabeçalho, rodapé, barra lateral e a</p>
        {
          posts.map( post => (
            <PostCard key={post.id}
                      titulo={post.titulo}
                      texto={post.texto}
            />
          ))
        }
        <CommentSection />
      </main>
      <Sidebar />
    </div>
  );
}
