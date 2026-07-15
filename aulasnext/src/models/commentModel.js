import prisma from '@/lib/db';

export const CommentModel = {
    buscarTodosComentarios: async () => {
        return await prisma.comment.findMany({
            orderBy: { id: 'asc' },
        });
    },

    buscarPorPost: async (postId) => {
        return await prisma.comment.findMany({
            where: { postId: Number(postId) },
            orderBy: { id: 'asc' },
        });
    },

    criar: async (novoComment) => {
        return await prisma.comment.create({
            data: {
                name: novoComment.name,
                body: novoComment.body,
                status: novoComment.status ?? 'publicado',
                postId: Number(novoComment.postId),
            },
        });
    },
};
