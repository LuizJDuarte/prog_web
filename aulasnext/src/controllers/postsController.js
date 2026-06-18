import {PostModel} from '@/models/postModel';

export const obterPostsPublicados = () =>{
    const todosOsPosts = PostModel.buscarTodos();

    const apenasPublicados = todosOsPosts.filter((post)=> post.status==="publicado");
    return apenasPublicados;
}

export function obterTodosPosts(){
    const todosPosts = PostModel.buscarTodos();
    return todosPosts;
}