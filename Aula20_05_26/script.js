const alunos = [
    {nome: "Ana", nota: 9.5 , curso: "Computação"},
    {nome: "Bruno",nota: 5.0, curso: "Engenharia"},
    {nome: "Carla", nota: 8.0 , curso: "Computação"},
    {nome: "Daniel", nota: 4.5, curso: "Direito"},
    {nome: "Elisa", nota: 10.0, curso: "Computação"}
];

// nomesAlunos = [];

// for(let i = 0; i < alunos.length; i++){
//     nomesAlunos.push(alunos[i].nome);
// }

// console.log(nomesAlunos)


// const nomes = alunos.map((aluno)=> aluno.nome);

// console.log(nomes);


// notas = alunos.map((aluno) => {if(aluno.nota>=7){aluno.status = "Aprovado"}else{ aluno.status = "Reprovado" }}); 
// notas = alunos.map((aluno) => {return {
//                                 nome: aluno.nome,
//                                 status: aluno.nota >= 7.0 ? "Aprovado":"Reprovado"
// }}); 

// console.log(notas)


alunosAprovados = alunos.filter((aluno) => aluno.nota >= 7.0 );
console.log(alunosAprovados)

somaNotas = alunos.reduce( (total, aluno) => total + aluno.nota, 0.0);