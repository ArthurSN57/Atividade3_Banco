const prompt = require('prompt-sync')();

const Conta = require('./conta.js');
const ContaCorrente = require('./contaCorrente.js');
const ContaPoupanca = require('./contaPoupanca.js');

const conta = new Conta();
const contaCorrente = new ContaCorrente();
const contaPoupanca = new ContaPoupanca();

// Apresentação do banco e menu de opções de interação.
function montarMenu(){
    let contas = {
        "1": contaCorrente,
        "2": contaPoupanca,
        "3": conta
    }

    let tipoConta;
    let continuarOperacoes = true;
    while(continuarOperacoes){
        console.log(' ');
        console.log('Escolha uma das opções (Digite o valor equivalente a operação desejada): ')
        console.log('1 - Criar conta');
        console.log('2 - Depositar');
        console.log('3 - Sacar');
        console.log('4 - Consultar Saldo');
        console.log('5 - Sair')
        console.log(' ');
        let acaoSelecionada = prompt('Digite a ação a ser executada:');
        let valor = 0;

        if(acaoSelecionada != 5){
            console.log(' ');
            console.log('Opções de Conta:');
            console.log('1 - Conta Corrente');
            console.log('2 - Conta Poupança');
            console.log('3 - Conta Genérica');
            tipoConta = prompt('Digite o número referente a opção de conta a ser utilizada:');
        }

        switch(acaoSelecionada){
            case "1":
                if(tipoConta >= 1 || tipoConta <= 3){
                    contas[tipoConta].criarConta();
                } else {
                    throw new Error('Opção selecionada incorreta!');
                }
                break;
            case "2":
                valor = parseFloat(prompt('Digite o valor que deseja depositar:'));
                if(tipoConta >= 1 || tipoConta <= 3){
                    contas[tipoConta].depositar(valor);
                } else {
                    throw new Error('Opção selecionada incorreta!');
                }
                break;
            case "3":
                valor = parseFloat(prompt('Digite o valor que deseja sacar:'));
                if(tipoConta >= 1 || tipoConta <= 3){
                    contas[tipoConta].sacar(valor);
                } else {
                    throw new Error('Opção selecionada incorreta!');
                }
                break;
            case "4":
                if(tipoConta >= 1 || tipoConta <= 3){
                    contas[tipoConta].apresentarSaldo();
                } else {
                    throw new Error('Opção selecionada incorreta!');
                }
                break;
            case "5":
                continuarOperacoes = false;
                break;
            default:
                throw new Error('Opção selecionada incorreta!');
                break;
        }
    }
}

console.log('Bem-Vindo ao Banco iTalents!');
montarMenu();