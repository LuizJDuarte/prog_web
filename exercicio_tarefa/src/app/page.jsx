'use client';
import { useState, useEffect } from 'react';

export default function ToDoList() {
    const [tarefas, setTarefas] = useState([]);
    const [novoTitulo, setNovoTitulo] = useState('');

    // 1. Implemente o useEffect para fazer o GET inicial e popular o estado
    useEffect(() => {

        async function buscarDadosTarefas() {
            try {
                const resposta = await fetch("/api/tarefas");

                if (!resposta.ok) {
                    throw new Error("Não foi possível acessar os dados das tarefas");
                }
                const dados = await resposta.json();
                setTarefas(dados);
            } catch (erro) {
                console.log(erro.message)
            }
        }

        buscarDadosTarefas();
    }, []);

    
    const handleCriar = async (e) => {
        // 2. Faca o fetch (POST), adicione a nova tarefa no estado e limpe o input
        e.preventDefault();

        try{
            const resposta = await fetch('/api/tarefas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo: novoTitulo }),
            });

            if(!resposta.ok){
                throw new Error('Erro ao criar tarefa');
            }
            const tarefaCriada = await resposta.json();
            setTarefas((tarefasAtuais) => [...tarefasAtuais, tarefaCriada]);
            setNovoTitulo('');
        } catch (erro){
            console.error(erro.message);
        }
    };

    const handleAtualizar = async (id, statusAtual) => {
        // 3. Faca o fetch (PUT) enviando o status invertido (!statusAtual)
        // Atualize a tarefa especifica no estado do React
        try {
            const resposta = await fetch(`/api/tarefas/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ concluida: !statusAtual }),
            });
            if (!resposta.ok) {
                throw new Error('Erro ao atualizar tarefa');
            }
            const tarefaAtualizada = await resposta.json();
            setTarefas((tarefasAtuais) =>
                tarefasAtuais.map((t) => (t.id === id ? tarefaAtualizada : t))
            );
        } catch (erro) {
            console.error(erro.message);
        }
    };

    const handleDeletar = async (id) => {
        // 4. Faca o fetch (DELETE) e remova a tarefa do estado visualmente
        try {
            const resposta = await fetch(`/api/tarefas/${id}`, {
                method: 'DELETE',
            });
            if (!resposta.ok) {
                throw new Error('Erro ao deletar tarefa');
            }
            setTarefas((tarefasAtuais) => tarefasAtuais.filter((t) => t.id !== id));
        } catch (erro) {
            console.error(erro.message);
        }
    };

    return (
        <main>
            <h1>Tarefas</h1>
            <form onSubmit={handleCriar}>
                <input value={novoTitulo} onChange={(e) => setNovoTitulo(e.
                    target.value)} placeholder="Nova tarefa" />
                <button type="submit">Salvar</button>
            </form>
                <ul>{
                    tarefas.map((tarefa)=>(
                    <li key={tarefa.id}>
                        <input
                            type="checkbox"
                            checked={tarefa.concluida}
                            onChange={() => handleAtualizar(tarefa.id, tarefa.concluida)}
                        />
                        <span
                            style={{
                                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                            }}
                        >
                            {tarefa.titulo}
                        </span>
                        <button onClick={() => handleDeletar(tarefa.id)}>Deletar</button>
                    </li> 
            ))}
            </ul>
        </main>
    );
}