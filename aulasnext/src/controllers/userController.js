import { UserModel } from "@/models/userModel";

export async function listarUsuarios() {
    return await UserModel.buscarTodos();
}

export async function obterUsuarioPorId(id) {
    const user = await UserModel.buscarPorId(id);
    if (!user) throw new Error("Usuário não encontrado");
    return user;
}

export async function criarUsuario(dados) {
    if (!dados?.email || !dados?.password || !dados?.nome) {
        throw new Error("email, password e nome são obrigatórios");
    }
    // Verifica se ja existe (email é @unique)
    const existente = await UserModel.buscarPorEmail(dados.email);
    if (existente) throw new Error("Email já cadastrado");
    return await UserModel.criar(dados);
}

export async function removerUsuario(id) {
    const ok = await UserModel.deletar(id);
    if (!ok) throw new Error("Usuário não encontrado");
    return true;
}
