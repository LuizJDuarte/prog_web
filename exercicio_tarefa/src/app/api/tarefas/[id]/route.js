import { NextResponse } from 'next/server';
import { buscarTarefa, atualizarStatus, removerTarefa } from '@/controllers/tarefaController';

const statusDoErro = (err) => err.message === 'Tarefa não encontrada' ? 404 : 400;

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const tarefa = await buscarTarefa(id);
        return NextResponse.json(tarefa, { status: 200 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: statusDoErro(err) });
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const { concluida } = await request.json();
        const tarefaAtualizada = await atualizarStatus(id, concluida);
        return NextResponse.json(tarefaAtualizada, { status: 200 });
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: statusDoErro(err) });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await removerTarefa(id);
        return NextResponse.json(
            { mensagem: 'Tarefa removida com sucesso' },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: statusDoErro(err) });
    }
}
