import { NextResponse } from "next/server";
import { obterPostsPublicados, obterTodosPosts } from "@/controllers/postsController";

export async function GET() {
    const dados = obterPostsPublicados();
    return NextResponse.json(dados, {status:200});
}
