import prisma from '@/lib/db';

export const PostModel = {
    buscarTodosPosts: async () => {
        return await prisma.post.findMany({
            orderBy: { id: 'asc' },
            include: {
                autor: { select: { id: true, nome: true, email: true } },
            },
        });
    },

    buscarPorId: async (id) => {
        return await prisma.post.findUnique({
            where: { id: Number(id) },
            include: {
                autor: { select: { id: true, nome: true, email: true } },
                comments: true,
            },
        });
    },

    criar: async (novoPost) => {
        return await prisma.post.create({
            data: {
                titulo: novoPost.titulo,
                texto: novoPost.texto ?? '',
                status: novoPost.status ?? 'publicado',
                autorId: Number(novoPost.autorId),
            },
        });
    },

    deletar: async (id) => {
        try {
            await prisma.post.delete({
                where: { id: Number(id) },
            });
            return true;
        } catch (err) {
            if (err.code === 'P2025') return false;
            throw err;
        }
    },
};
