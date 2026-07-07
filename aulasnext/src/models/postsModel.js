const mockPosts = [{id: 1, titulo: "Titulo 1", texto: "Texto 1", status: "publicado"},
               {id: 2, titulo: "Titulo 2", texto: "Texto 2", status: "arquivado"}
    ];

export const PostModel = {
    buscarTodosPosts : () => mockPosts,

    criar: (novoPost)=> {
        const proximoId = posts.length > 0
        ?
        Math.max(...posts.map(post => post.id)) + 1
        :
        1;

        // 2. Monta o objeto final 
        const postComId = {id: proximoId, ...novoPost};

        // 3. Salva no "banco" e retorna 
        posts.push(postComId);
        return postComId;
    } ,

    buscaPorId: (idBusca) => posts.find(p=>p.id === Number(idBusca)),
    deletar: (idDeletar) => {
        posts = posts.filter(p => p.id !== Number(idDeletar));
    } 
};
