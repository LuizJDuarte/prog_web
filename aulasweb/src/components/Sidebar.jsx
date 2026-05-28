import Link from "next/link";
import styles from "./Sidebar.module.css";

const postsRecentes = [
    {id: 1, titulo:"Titulo 1", slug: "/Slug1"},
    {id: 2, titulo:"Titulo 2", slug: "/Slug2"},
    {id: 3, titulo:"Titulo 3", slug: "/Slug3"}
]

export default function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <h3>Posts recentes</h3>
            <ul>
                {
                    postsRecentes.map((post)=>(
                        <li key={post.id}>
                            <Link href="{post.link}">{post.titulo}</Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
}