// 1. Selecionar os elementos que vamos usar
const changeTitleButton = document.querySelector("#change-title-btn")
const mainTitle = document.querySelector("#titulo-principal")

// 2. Definir a função que fará a mágica
function changeTheTitle(){
    console.log("Botão ciclado");
    mainTitle.textContent = "A Mágica do DOM";
    mainTitle.style.color = "#c0392b";
}

// 3. Adicionar o event listener ao botão 
changeTitleButton.addEventListener("click",changeTheTitle);



