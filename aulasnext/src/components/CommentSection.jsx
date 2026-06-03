'use client';

import styles from './CommentSection.module.css';
import { useState , useEffect } from 'react';

export default function CommentSection(){
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const [newCommentText, setNewCommentText] = useState('');

    useEffect(()=>{
        // A função que busca os dados
        async function fetchComments(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5");
                if(!response.ok){
                    throw new Error("Falha ao buscar os comentários.");
                }
                const data = await response.json();
                setComments(data); // Sucesso! Guarda os dados no estado
            } catch(err){
                setError(err.message); // Erro! Guarda a mensagem de erro no estado
            } finally {
                setLoading(false); // Terminou, seja com sucesso ou erro 
            }
        }   

        fetchComments(); // Chama a função que acabamos de criar
    }, []); // [] = roda apenas uma vez!

    function handleSubmit(event){   
        event.preventDefault();
        const newCommentObject = {
            id: new Date().getTime(),
            name: "Visitante",
            body: newCommentText
        };
        setComments([...comments, newCommentObject]);
        setNewCommentText('');
    }

    return(
        <section className={styles.commentSection}>
            <h2>Comentários</h2>

            {/* Formulário para adicionar um novo comentário */}
            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <label htmlFor="comment">Deixe seu comentário :</label>
                <textarea id="comment" name="comment" rows="4" required value={newCommentText} onChange={(event)=>setNewCommentText(event.target.value)}></textarea>
                <button type="submit">Enviar Comentário</button>
            </form>

            {/* Lista de comentários existentes */}
            <div className={styles.commentList}>
                {loading && <p>Carregando comentários...</p>}
                {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
                {!loading && !error && comments.map((comentario)=>(
                    <div key={comentario.id} className={styles.comment}>
                        {/* JSONPlaceholder usa 'email' como autor e 'body' como texto */}
                        <p className={styles.commentAuthor}>{comentario.name} diz:</p>
                        <p className={styles.commentText}>{comentario.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}