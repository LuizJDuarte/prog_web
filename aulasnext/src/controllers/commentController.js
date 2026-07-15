import { CommentModel } from "@/models/commentModel";

export async function obterComentariosPublicados() {
    const todos = await CommentModel.buscarTodosComentarios();
    return todos.filter((c) => c.status === "publicado");
}

export async function obterTodosComentarios() {
    return await CommentModel.buscarTodosComentarios();
}

export async function obterComentariosDoPost(postId) {
    return await CommentModel.buscarPorPost(postId);
}

export async function criarComentario(dados) {
    if (!dados?.name || !dados?.body || !dados?.postId) {
        throw new Error("name, body e postId são obrigatórios");
    }
    return await CommentModel.criar(dados);
}
