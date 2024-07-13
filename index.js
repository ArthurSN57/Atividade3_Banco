const Conta = require('./conta.js');
const ContaCorrente = require('./contaCorrente.js');
const ContaPoupanca = require('./contaPoupanca.js');

const conta = new Conta();
const contaCorrente = new ContaCorrente();
const contaPoupanca = new ContaPoupanca();

let continuarOperacoes = true;
// Apresentação do banco e menu de opções de interação.
console.log('Bem-Vindo ao Banco iTalents!');

while(continuarOperacoes){
    console.log(' ');
    console.log('Escolha uma das opções ')
}

conta.apresentarSaldo();