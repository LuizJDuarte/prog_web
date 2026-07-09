
export async function GET(request, { params }) {
// 1. Extraia o id de params e busque a tarefa
// 2. Se nao achar, retorne Status 404 (Not Found)
}
export async function PUT(request, { params }) {
// 1. Extraia o id e o novo status (concluida) do request.json()
// 2. Atualize via Controller e retorne Status 200
}
export async function DELETE(request, { params }) {
// 1. Delete a tarefa pelo ID e retorne mensagem de sucesso
}