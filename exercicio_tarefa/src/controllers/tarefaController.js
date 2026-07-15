import { TarefaModel } from '@/models/tarefaModel';

// Todas as funcoes agora sao async porque o Model conversa com o banco

export const adicionarTarefa = async (titulo) => {
    if (!titulo || titulo.trim() === '') {
        throw new Error('Título inválido');
    }
    return await TarefaModel.criar(titulo);
};

export const atualizarStatus = async (id, concluida) => {
    const tarefaAtualizada = await TarefaModel.atualizar(id, concluida);
    if (!tarefaAtualizada) {
        throw new Error('Tarefa não encontrada');
    }
    return tarefaAtualizada;
};

export const listarTarefas = async () => {
    return await TarefaModel.buscarTodas();
};

export const buscarTarefa = async (id) => {
    const tarefa = await TarefaModel.buscarPorId(id);
    if (!tarefa) {
        throw new Error('Tarefa não encontrada');
    }
    return tarefa;
};

export const removerTarefa = async (id) => {
    const removida = await TarefaModel.deletar(id);
    if (!removida) {
        throw new Error('Tarefa não encontrada');
    }
    return true;
};
