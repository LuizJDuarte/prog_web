import { TarefaModel } from '@/models/tarefaModel';

export const adicionarTarefa = (titulo) => {
    const criarTarefa = TarefaModel.criar(titulo);
    return criarTarefa;
};
// Verifique se o titulo e valido. Se for, chame TarefaModel.criar

export const atualizarStatus = (id, concluida) => {
        
};
// Verifique se a tarefa existe. Se existir, atualize.
// Implemente listarTarefas, buscarTarefa e removerTaref