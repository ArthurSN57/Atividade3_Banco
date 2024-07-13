const Conta = require("./conta");

class ContaCorrente extends Conta{
    constructor(titular, saldo, juros){
        super(titular, saldo);
        this.juros = juros;
    }

    aplicarJuros(){
        
    }
}

module.exports = ContaCorrente;