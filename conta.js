class Conta {
    constructor(titular, saldo){
        this.saldo = saldo;
        this.titular = titular;
    }

    depositar(valor){

    }

    sacar(valor){

    }

    apresentarSaldo(){
        if(!this.saldo){
            this.saldo = 0;
        }

        const formatCurrency = new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
        });

        console.log('Saldo: ', formatCurrency.format(this.saldo));
    }
}

module.exports = Conta;