import { NextResponse } from "next/server";
import { listarUsuarios, criarUsuario } from "@/controllers/userController";

export async function GET() {
    try {
        const users = await listarUsuarios();
        return NextResponse.json(users, { status: 200 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const corpo = await request.json();
        const user = await criarUsuario(corpo);
        return NextResponse.json(user, { status: 201 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: 400 });
    }
}
