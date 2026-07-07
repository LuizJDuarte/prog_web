import { NextResponse } from "next/server";
import { obterPostsPublicados, obterTodosPosts } from "@/controllers/postsController";

// 1. READ (GET) - Lista todos os posts 
export async function GET() {
    const todosOsPosts = PostModel.buscarTodos();
    return NextResponse.json(todosOsPosts, {status:200});
}

// 2. CREATE (POST) - Cria um novo post
export async function POST(request){
    // Pega o JSON que veio no "corpo" da requisição do Front-end 
    const corpoDaRequisicao = await request.json();

    // Validação simples (Erro 400 se faltar o título)
    if(!corpoDaRequisicao.titulo){
        return NextResponse.json({ erro: "O título é obrigatório "}, {status:400})
    }

    // Mandar o Model salvar
    const postCriado = PostModel.criar(corpoDaRequisicao);

    // Retorna 201 (Created)
    return NextResponse.json(postCriado, {status:201})
}
