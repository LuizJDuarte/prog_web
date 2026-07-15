import prisma from '@/lib/db';

// Model agora usa Prisma Client para persistir no PostgreSQL.
// Todos os metodos passaram a ser async (retornam Promise).
export const TarefaModel = {
    buscarTodas: async () => {
        return await prisma.tarefa.findMany({
            orderBy: { id: 'asc' },
        });
    },

    buscarPorId: async (id) => {
        return await prisma.tarefa.findUnique({
            where: { id: Number(id) },
        });
    },

    criar: async (titulo) => {
        return await prisma.tarefa.create({
            data: {
                titulo: titulo,
                concluida: false,
            },
        });
    },

    atualizar: async (id, concluida) => {
        // Se o id nao existir, o Prisma lanca P2025 - tratamos aqui
        try {
            return await prisma.tarefa.update({
                where: { id: Number(id) },
                data: { concluida: concluida },
            });
        } catch (err) {
            if (err.code === 'P2025') return null;
            throw err;
        }
    },

    deletar: async (id) => {
        try {
            await prisma.tarefa.delete({
                where: { id: Number(id) },
            });
            return true;
        } catch (err) {
            if (err.code === 'P2025') return false;
            throw err;
        }
    },
};
