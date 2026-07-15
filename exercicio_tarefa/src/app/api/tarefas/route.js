import { NextResponse } from 'next/server';
import { adicionarTarefa, listarTarefas } from '@/controllers/tarefaController';

export async function GET() {
    try {
        const tarefas = await listarTarefas();
        return NextResponse.json(tarefas, { status: 200 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { titulo } = await request.json();
        const tarefaCriada = await adicionarTarefa(titulo);
        return NextResponse.json(tarefaCriada, { status: 201 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: 400 });
    }
}
