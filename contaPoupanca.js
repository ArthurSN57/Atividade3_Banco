const Conta = require("./conta");
const prompt = require('prompt-sync')();

class ContaPoupanca extends Conta{
    constructor(titular, saldo, rendimento){
        super(titular, saldo);
        this.rendimento = rendimento;
    }

    criarConta(){
        this.titular = prompt('Digite o nome do titular da conta: ');
        this.saldo = 2;
        this.rendimento = prompt('Digite o rendimento desta conta poupança:');
    }

    aplicarRendimento(){

    }

    apresentarSaldo(){
        const formatCurrency = new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
        });

        console.log('Saldo: ', formatCurrency.format(this.saldo));
    }
}

module.exports = ContaPoupanca;