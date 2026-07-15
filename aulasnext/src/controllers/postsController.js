import { PostModel } from "@/models/postsModel";

export async function obterPostsPublicados() {
    const todosPosts = await PostModel.buscarTodosPosts();
    return todosPosts.filter((p) => p.status === "publicado");
}

export async function obterTodosPosts() {
    return await PostModel.buscarTodosPosts();
}

export async function obterPostPorId(id) {
    const post = await PostModel.buscarPorId(id);
    if (!post) throw new Error("Post não encontrado");
    return post;
}

export async function criarPost(dados) {
    if (!dados?.titulo || dados.titulo.trim() === "") {
        throw new Error("O título é obrigatório");
    }
    if (!dados?.autorId) {
        throw new Error("autorId é obrigatório");
    }
    return await PostModel.criar(dados);
}

export async function removerPost(id) {
    const ok = await PostModel.deletar(id);
    if (!ok) throw new Error("Post não encontrado");
    return true;
}
