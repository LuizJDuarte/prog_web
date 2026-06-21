const comments = [{id: 1, name: "Usuário 1", body: "Comentário 1", status: "publicado"},
               {id: 2, name: "Usuário 2", body: "Comentário 2", status: "arquivado"}
    ];

export const CommentModel = {
    buscarTodosComentarios : () => {
        return comments;
    }
}
