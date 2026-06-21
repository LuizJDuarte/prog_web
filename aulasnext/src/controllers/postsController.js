import { PostModel } from "@/models/postsModel";

export function obterPostsPublicados() {
    const todosPosts = PostModel.buscarTodosPosts();
    const postsPublicados = todosPosts.filter((p)=> p.status == "publicado");
    return postsPublicados;
}

export function obterTodosPosts() {
    const todosPosts = PostModel.buscarTodosPosts();
    return todosPosts;
}