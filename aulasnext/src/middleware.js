import {NextResponse} from 'next/server';

export function middleware(request){

    // 1. O usuário quer ir para o /admin? 
    const isCaminhoAdmin = request.nextUrl.pathname.startsWith('/admin');

    // 2. Ele tem o token falso de login?
    const temToken = request.cookies.get('meu_blog_token');

    // 3. A lógica do porteiro
    if (isCaminhoAdmin && !temToken){
        console.log("Usuário não autenticado")
        // Redireciona para a página inicial (home)
        return NextResponse.redirect(new URL('/',request.url));
    }

    const isCaminhoArtigos = request.nextUrl.pathname.startsWith('/artigos');

    if(isCaminhoArtigos){
        return NextResponse.redirect(new URL('/posts',request.url)); 
    }

    return NextResponse.next(); 
}


// Só vai funcionar para as páginas Admin   
export const config = {
    matcher: ["/admin/:path*", "/artigos/:path*"],
}