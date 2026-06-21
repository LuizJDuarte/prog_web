
export default function PostCard({titulo, texto}){
    return(
        <article className="post">
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </article>
    );
}