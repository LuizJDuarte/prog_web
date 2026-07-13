import { TarefaModel } from '@/models/tarefaModel';

// Verifique se o titulo e valido. Se for, chame TarefaModel.criar
export const adicionarTarefa = (titulo) => {
    if(titulo.trim() === ''){
        throw new Error('Título inválido');
    }
    const criarTarefa = TarefaModel.criar(titulo);
    return criarTarefa;
};

// Verifique se a tarefa existe. Se existir, atualize.
export const atualizarStatus = (id, concluida) => {
    const tarefaAtualizada = TarefaModel.atualizar(id,concluida);
    if (!tarefaAtualizada){
        throw new Error('Tarefa não encontrada');
    }
    return tarefaAtualizada; 
};

// Implemente listarTarefas, buscarTarefa e removerTaref
export const listarTarefas = () => {
    return TarefaModel.buscarTodas();
}

export const buscarTarefa = (id) => {
    const tarefa = TarefaModel.buscarPorId(id);
    if (!tarefa) {
        throw new Error('Tarefa não encontrada');
    }
    return tarefa;
};

export const removerTarefa = (id) => {
    const tarefaRemovida = TarefaModel.deletar(id);
    if(!tarefaRemovida){
        throw new Error('Tarefa não encontrada');
    }
    return true; 
}