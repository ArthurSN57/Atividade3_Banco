const Conta = require("./conta");
const prompt = require('prompt-sync')();

class ContaPoupanca extends Conta{
    constructor(titular, saldo, rendimento){
        super(titular, saldo);
        this.rendimento = rendimento;
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
        this.rendimento = prompt('Digite o rendimento desta conta poupança:');

        this.validar('criar', this.rendimento);
    }

    aplicarRendimento(valor){
        let resultado = valor + (valor * (this.rendimento / 100));

        return resultado;
    }

    depositar(valor){
        this.validar('depositar', valor);

        let valorComJuros = this.aplicarRendimento(valor);
        this.saldo += valorComJuros;
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

module.exports = ContaPoupanca;