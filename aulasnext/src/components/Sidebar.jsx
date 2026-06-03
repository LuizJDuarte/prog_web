'use client';

import Link from "next/link";
import styles from "./Sidebar.module.css";
import { useState , useEffect } from 'react';

export default function Sidebar(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchPosts(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
                if(!response.ok){
                    throw new Error("Falha ao buscar Posts.");
                }
                const data = await response.json();
                setPosts(data);
            }catch(err){
                setError(err.message);
            } finally {
                setLoading(false); 
        }
    }
        
        fetchPosts();
    }, []);

    return(
        <aside className={styles.sidebar}> 
            <h3>Posts recentes</h3>
            <ul>
                    {loading && <p>Carregando posts...</p>}
                    {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
                    {!loading && !error && posts.map((post)=>(
                        <li key={post.id}>
                            <Link href={"#"}>{post.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
}