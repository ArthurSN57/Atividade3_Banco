const Conta = require("./conta");

class ContaPoupanca extends Conta{
    constructor(titular, saldo, rendimento){
        super(titular, saldo);
        this.rendimento = rendimento;
    }

    aplicarRendimento(){

    }
}

module.exports = ContaPoupanca;