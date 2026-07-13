
export let tarefas = [{id:1,titulo:'teste 1',concluida:true}]; // Banco de dados em memoria


export const TarefaModel = {
    buscarTodas: () => { /* Retorne o array */
        return tarefas;
     },
    buscarPorId: (id) => tarefas.find((t)=>t.id === Number(id)),
    criar: (titulo) => {
    // 1. Descubra o proximo ID disponivel
        const proximoId = tarefas.length > 0
        ?
        Math.max(...tarefas.map(tarefa => tarefa.id)) + 1
        :
        1;
        
    // 2. Crie a nova tarefa (concluida: false) e adicione ao array
        const tarefaComId = {id: proximoId, titulo: titulo, concluida: false};

        tarefas.push(tarefaComId);
        return tarefaComId;
    },
    atualizar: (id, concluida) => {
    // 1. Encontre a tarefa pelo ID
        const tarefa = tarefas.find((t)=> t.id === Number(id));
        
        if (!tarefa){
            return null;
        }
    // 2. Atualize o status e retorne a tarefa atualizada
        tarefa.concluida = concluida;
        return tarefa; 
    },
    deletar: (id) => {
    // 1. Encontre o indice da tarefa pelo ID e remova do array
        tarefas = tarefas.filter(t => t.id !== Number(id));
    }
};