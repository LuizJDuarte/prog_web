import { NextResponse } from "next/server";
import { obterTodosPosts, criarPost } from "@/controllers/postsController";

// 1. READ (GET) - Lista todos os posts
export async function GET() {
    try {
        const todosOsPosts = await obterTodosPosts();
        return NextResponse.json(todosOsPosts, { status: 200 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: 500 });
    }
}

// 2. CREATE (POST) - Cria um novo post
export async function POST(request) {
    try {
        const corpo = await request.json();
        const postCriado = await criarPost(corpo);
        return NextResponse.json(postCriado, { status: 201 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: 400 });
    }
}
