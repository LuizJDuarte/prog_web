import prisma from '@/lib/db';

export const UserModel = {
    buscarTodos: async () => {
        return await prisma.user.findMany({
            orderBy: { id: 'asc' },
            // Nao devolve password nas listagens
            select: { id: true, email: true, nome: true, createdAt: true },
        });
    },

    buscarPorId: async (id) => {
        return await prisma.user.findUnique({
            where: { id: Number(id) },
            select: {
                id: true,
                email: true,
                nome: true,
                createdAt: true,
                posts: true,
            },
        });
    },

    buscarPorEmail: async (email) => {
        return await prisma.user.findUnique({
            where: { email },
        });
    },

    criar: async (novoUser) => {
        return await prisma.user.create({
            data: {
                email: novoUser.email,
                password: novoUser.password,
                nome: novoUser.nome,
            },
            select: { id: true, email: true, nome: true, createdAt: true },
        });
    },

    deletar: async (id) => {
        try {
            await prisma.user.delete({
                where: { id: Number(id) },
            });
            return true;
        } catch (err) {
            if (err.code === 'P2025') return false;
            throw err;
        }
    },
};
