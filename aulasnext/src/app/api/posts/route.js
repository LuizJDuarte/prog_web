import {NextResponse} from 'next/server';
import { obterPostsPublicados } from '@/controllers/postController' ;

const mockPosts = [{id:1, titulo: "A"},{id:2, titulo: "B"}];

export async function GET(){
    // Nossos dados simulados (No futuro, virão do Banco de dados)
    
    const posts = obterPostsPublicados();
    return NextResponse.json(postsFiltrados);
}