const valor1 = document.querySelector("#num-um");
const valor2 = document.querySelector("#num-dois");
const btnSoma = document.querySelector("#btn-soma");
const btnSubtracao = document.querySelector("#btn-subtracao");
const btnMultiplicacao = document.querySelector("#btn-multiplicacao");
const btnDivisao = document.querySelector("#btn-divisao");
const resultado = document.querySelector("#resultado-final");

function soma(event) {
    event.preventDefault(); 
    
    const num1 = Number(valor1.value);
    const num2 = Number(valor2.value);
    
    const soma = num1 + num2;
    
    resultado.textContent = soma;
}

function subtracao(event) {
    event.preventDefault(); 
    
    const num1 = Number(valor1.value);
    const num2 = Number(valor2.value);
    
    const subtracao = num1 - num2;
    
    resultado.textContent = subtracao;
}

function multiplicacao(event) {
    event.preventDefault(); 
    
    const num1 = Number(valor1.value);
    const num2 = Number(valor2.value);
    
    const multiplicacao = num1 * num2;
    
    resultado.textContent = multiplicacao;
}

function divisao(event) {
    event.preventDefault(); 
    
    const num1 = Number(valor1.value);
    const num2 = Number(valor2.value);
    
    const divisao = num1 / num2;


    
    
    resultado.textContent = divisao;
}


btnSoma.addEventListener("click", soma);
btnSubtracao.addEventListener("click", subtracao);
btnMultiplicacao.addEventListener("click", multiplicacao);
btnDivisao.addEventListener("click", divisao);

