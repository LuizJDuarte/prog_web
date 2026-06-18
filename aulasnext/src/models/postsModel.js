const mockPosts = [{id: 1, titulo:"A", status: "publicado"},{id: 2, titulo:"B", status: "rascunho"}];

export const PostModel = {
    buscarTodos: () =>{
        return mockPosts;
    }
}