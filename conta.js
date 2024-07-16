const prompt = require('prompt-sync')();

class Conta {
    constructor(titular, saldo){
        this.saldo = saldo;
        this.titular = titular;
    }

    validar(acao, valor){
        if(!this.titular){
            throw new Error('Conta inexistente!');
        } else if(typeof valor != 'number'){
            throw new Error('Formato de valor incorreto, digite um valor numérico.');
        } else if(valor < 0){
            throw new Error('Valor incorreto, digite um valor positivo.');
        }
        
        if(acao == 'sacar'){
            if(valor > this.saldo){
                throw new Error('Não é possível sacar um valor maior que o saldo da conta.');
            }
        }
    }

    criarConta(){
        this.titular = prompt('Digite o nome do titular da conta: ');
        this.saldo = 0;
    }

    depositar(valor){
        this.validar('depositar', valor);

        this.saldo += valor;
    }

    sacar(valor){
        this.validar('sacar', valor);

        this.saldo -= valor;
    }

    apresentarSaldo(){
        this.validar('apresentar', this.saldo);

        const formatCurrency = new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
        });

        console.log('Saldo: ', formatCurrency.format(this.saldo));
    }
}

module.exports = Conta;