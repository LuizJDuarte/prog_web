const mockPosts = [{id: 1, titulo: "Titulo 1", texto: "Texto 1", status: "publicado"},
               {id: 2, titulo: "Titulo 2", texto: "Texto 2", status: "arquivado"}
    ];

export const PostModel = {
    buscarTodosPosts : () => {
        return mockPosts;
    }
}
