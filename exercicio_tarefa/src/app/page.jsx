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

        const resposta = await fetch('/api/tarefas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: novoTitulo }),
        });

        const result = await resposta.json();
        setTarefas([...tarefas, result]);


    };

    const handleAtualizar = async (id, statusAtual) => {
        // 3. Faca o fetch (PUT) enviando o status invertido (!statusAtual)
        // Atualize a tarefa especifica no estado do React
    };

    const handleDeletar = async (id) => {
        // 4. Faca o fetch (DELETE) e remova a tarefa do estado visualmente
    };

    return (
        <main>
            <h1>Tarefas</h1>
            <form onSubmit={handleCriar}>
                <input value={novoTitulo} onChange={(e) => setNovoTitulo(e.
                    target.value)} />
                <button type="submit">Salvar</button>
            </form>
                       <ul>{
            tarefas.map((tarefa)=>(
                <li key={tarefa.id}>
                    <p>Título: {tarefa.titulo}</p>
                </li> 
            ))}
            </ul>
        </main>
    );
}