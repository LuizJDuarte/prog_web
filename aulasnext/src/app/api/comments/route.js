import { NextResponse } from "next/server";
import { obterTodosComentarios } from "@/controllers/commentController";

export async function GET() {
    const dados = obterTodosComentarios();
    return NextResponse.json(dados, {status:200});
}
