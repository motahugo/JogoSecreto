//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = ' Escolha um número de 1 a 100'
let = listaDeNumerosSorteados = [];
let = numeroLimite = 10;
let numeroScreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if( chute == numeroScreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroScreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
     }  
}

function gerarNumeroAleatorio(){
    let = numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quentidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quentidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
    }
}
    

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    numeroScreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
