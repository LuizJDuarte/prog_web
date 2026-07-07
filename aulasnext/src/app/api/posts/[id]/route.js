import { NextResponse } from "next/server";
import { PostModel } from '@/models/postModel' ;

// Buscar apenas UM post
export async function GET(request, { params }) {
    const { id } = params; // Pega o ID da URL
    const post = PostModel.buscarPorId(id);

    if (!post) {
        return NextResponse. json({ erro: "Post não encontrado" }, { status: 404 })
    }

    return NextResponse. json(post, { status: 200 });
}

// Deletar UM post
export async function DELETE (request, { params }) {
    const { id } = params;
    // Verifica se existe antes de deletar
    const postExiste = PostModel.buscarPorId(id) ;
    if (!postExiste) {
        return NextResponse. json({ erro: "Post não encontrado" }, { status: 404 }) ;
    }

    PostModel.deletar(id);
    
    // 200 OK com mensagem de sucesso
    return NextResponse. json({ mensagem: "Post deletado com sucesso!" }, { status: 200});
}