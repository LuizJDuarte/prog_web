import { NextResponse } from "next/server";
import { obterUsuarioPorId, removerUsuario } from "@/controllers/userController";

const statusDoErro = (err) => err.message === "Usuário não encontrado" ? 404 : 400;

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const user = await obterUsuarioPorId(id);
        return NextResponse.json(user, { status: 200 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: statusDoErro(err) });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await removerUsuario(id);
        return NextResponse.json({ mensagem: "Usuário removido com sucesso!" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: statusDoErro(err) });
    }
}
