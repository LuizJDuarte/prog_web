'use client';

import styles from './CommentSection.module.css';
import { useState } from 'react';

// Dados fictícios de comentários
const mockComentarios = [
{ id: 101, autor: "Maria", texto: "Ótimo post! Muito bem explicado." },
{ id: 102, autor: "João", texto: "Tinha dúvidas sobre isso, agora entendi tudo. Obrigado!" },
{ id: 103, autor: "Ana", texto: "Concordo plenamente. 0 Next. js facilita muito a vida." }
];


export default function CommentSection(){
    const [comments, setComments] = useState(mockComentarios);

    const [newCommentText, setNewCommentText] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        const newCommentObject = {
            id: new Date().getTime(),
            autor: "Visitante",
            texto: newCommentText
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
                {comments.map((comentario)=>(
                    <div key={comentario. id} className={styles. comment}>
                        <p className={styles.commentAuthor}>{comentario.autor} diz:</p>
                        <p className={styles.commentText}>{comentario.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}