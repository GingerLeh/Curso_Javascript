export class ContaCorrente {
    agencia;
    _saldo = 0; //usar o # é feito de forma "automática" o private, porém se tem o _ é pra não mexer

    cliente;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
    depositar(valor) {
        if (valor <= 0) return; //early return
        this._saldo += valor;
    }
    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}