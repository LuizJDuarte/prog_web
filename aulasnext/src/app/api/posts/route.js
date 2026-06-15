import {NextResponse} from 'next/server';
import {obterTodosPosts} from '../../controllers/postsController'

export async function GET(){
    // Nossos dados simulados (No futuro, virão do Banco de dados)
    // const posts = [{id: 1, titulo:"Titulo 1", texto: "Texto 1"},{id: 2, titulo:"Titulo 2", texto: "Texto 2"}];

    return NextResponse.json(obterTodosPosts, {status:200});
}