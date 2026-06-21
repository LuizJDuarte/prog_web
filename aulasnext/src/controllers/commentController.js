import { CommentModel } from "@/models/commentModel";

export function obterComentariosPublicados() {
    const todosComentarios = CommentModel.buscarTodosComentarios();
    const comentariosPublicados = todosComentarios.filter((p)=> p.status == "publicado");
    return comentariosPublicados;
}

export function obterTodosComentarios() {
    const todosComentarios = CommentModel.buscarTodosComentarios();
    return todosComentarios;
}