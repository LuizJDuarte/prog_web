import { NextResponse } from 'next/server';
import { buscarTarefa , atualizarStatus , removerTarefa } from '@/controllers/tarefaController';

// Helper para escolher o status HTTP a partir da mensagem de erro
const statusDoErro = (err) => err.message === 'Tarefa não encontrada' ? 404 : 400;

export async function GET(request, { params }) {
// 1. Extraia o id de params e busque a tarefa
// 2. Se nao achar, retorne Status 404 (Not Found)
    try {
        const { id } = await params;
        const tarefa = buscarTarefa(id);
        return NextResponse.json(tarefa, { status: 200 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: statusDoErro(err) });
    }
}

export async function PUT(request, { params }) {
// 1. Extraia o id e o novo status (concluida) do request.json()
// 2. Atualize via Controller e retorne Status 200
    try {
        const { id } = await params;
        const { concluida } = await request.json();
        const tarefaAtualizada = atualizarStatus(id, concluida);
        return NextResponse.json(tarefaAtualizada, { status: 200 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: statusDoErro(err) });
    }
}
export async function DELETE(request, { params }) {
// 1. Delete a tarefa pelo ID e retorne mensagem de sucesso
    try {
        const { id } = await params;
        removerTarefa(id);
        return NextResponse.json(
            { mensagem: 'Tarefa removida com sucesso' },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: statusDoErro(err) });
    }
}