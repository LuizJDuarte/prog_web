import { NextResponse } from 'next/server';
import { adicionarTarefa, listarTarefas } from '@/controllers/tarefaController';

export async function GET() { /* Retorne a lista de tarefas */ 
    const tarefas = listarTarefas();
    return NextResponse.json(tarefas, {status:200});
}

export async function POST(request) { /* Extraia o titulo, valide e crie */ 
    // Validação simples (Erro 400 se faltar o título)
    try {
        // Pega o JSON que veio no "corpo" da requisição do Front-end 
        const { titulo } = await request.json();
        // Mandar o Controller salvar
        const tarefaCriada = adicionarTarefa(titulo);
        return NextResponse.json(tarefaCriada, { status: 201 });     // Retorna 201 (Created)
    } catch (err) {
        return NextResponse.json({ erro: err.message }, { status: 400 });
    }
}