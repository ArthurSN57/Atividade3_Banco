const Conta = require("./conta");
const prompt = require('prompt-sync')();

class ContaCorrente extends Conta{
    constructor(titular, saldo, juros){
        super(titular, saldo);
        this.juros = juros;
    }

    criarConta(){
        this.titular = prompt('Digite o nome do titular da conta: ');
        this.saldo = 1;
        this.juros = parseFloat(prompt('Digite a taxa de juros desta conta corrente:'));
    }

    aplicarJuros(){
        
    }

    apresentarSaldo(){
        const formatCurrency = new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
        });

        console.log('Saldo: ', formatCurrency.format(this.saldo));
    }
}

module.exports = ContaCorrente;