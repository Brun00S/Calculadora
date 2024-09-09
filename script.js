//exibir operando no input
let numero = "";
let operacao;
let primeiroOperando;
let segundoOperando;

function clicarOperando(operando){
    numero = numero + operando;
    exibirInput(numero);
}

function exibirInput(mensagem){
    let elemento = document.querySelector("#telaDeExibicao");
    elemento.textContent = mensagem;
}

//operador
function clicarOperador(operador){
    primeiroOperando = parseFloat(numero);
    limparTela();
    operacao = operador;
    exibirInput(operador);
}

//calcular
function calcular(){
    segundoOperando = parseFloat(numero);
    limparTela();
    let resultado;

    switch (operacao){
        case '+':
            resultado = primeiroOperando + segundoOperando;
            break;

        case '*':
            resultado = primeiroOperando * segundoOperando;
            break;

        case '/':
            if (segundoOperando == 0) {
                alert("Não é possível divdir por zero");
                break;
            }
            else{           
                resultado = primeiroOperando / segundoOperando;
                break;
            }

        case '-':
            resultado = primeiroOperando - segundoOperando;
            break;
    }

    resultado = parseFloat(resultado);
    exibirInput(resultado);
    numero = resultado;

}

//limpar
function limparTela(){
    let elemento = document.querySelector("#telaDeExibicao");
    elemento.textContent = "";
    numero = "";
}

//Excluir so um numero
function eliminarDigito(){
    let elemento = document.querySelector("#telaDeExibicao");
    numero = elemento.textContent.slice(0, -1);
    console.log(numero);
    exibirInput(numero);
}


//event listeners do teclado

document.addEventListener("keydown", function(event){
    if ((event.key >= '0' && event.key <= '9')){
        clicarOperando(event.key);
    }
    else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        clicarOperador(event.key);
    }
    else if (event.key === "Enter") {
        calcular();
    }
    else if (event.shiftKey && event.key == "Backspace"){
        limparTela();
    }
    else if (event.key === "Backspace"){
        eliminarDigito();
    }
    else if (event.key == "," || event.key == "."){
        clicarOperando(".");
    }

})