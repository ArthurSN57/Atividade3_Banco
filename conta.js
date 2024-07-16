const prompt = require('prompt-sync')();

class Conta {
    constructor(titular, saldo){
        this.saldo = saldo;
        this.titular = titular;
    }

    criarConta(){
        this.titular = prompt('Digite o nome do titular da conta: ');
        this.saldo = 0;
    }

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        this.saldo -= valor;
    }

    apresentarSaldo(){
        const formatCurrency = new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
        });

        console.log('Saldo: ', formatCurrency.format(this.saldo));
    }
}

module.exports = Conta;