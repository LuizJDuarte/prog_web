import { NextResponse } from 'next/server';
import { adicionarTarefa, listarTarefas } from '@/controllers/tarefaController';
import { TarefaModel } from '@/models/tarefaModel';

export async function GET() { /* Retorne a lista de tarefas */ 
    const todosAsTarefas = TarefaModel.buscarTodas();
    return NextResponse.json(todosAsTarefas, {status:200});
}

export async function POST(request) { /* Extraia o titulo, valide e crie */ 
    // Pega o JSON que veio no "corpo" da requisição do Front-end 
    const corpoDaRequisicao = await request.json();

    // Validação simples (Erro 400 se faltar o título)
    if(!corpoDaRequisicao.titulo){
        return NextResponse.json({ erro: "O título é obrigatório "}, {status:400})
    }

    // Mandar o Model salvar
    const tarefaCriada = TarefaModel.criar(corpoDaRequisicao.titulo);

    // Retorna 201 (Created)
    return NextResponse.json(tarefaCriada, {status:201})
}