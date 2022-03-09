
class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0; //usar o # é feito de forma "automática" o private, porém se tem o _ é pra não mexer

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
}



const cliente1 = new Cliente();
const contaCorrenteAlessa = new ContaCorrente();
cliente1.nome = "Alessa";
cliente1.cpf = 43755829878;
contaCorrenteAlessa.agencia = 1001;
contaCorrenteAlessa.depositar(1000);

const valorSacado = contaCorrenteAlessa.sacar(54);
console.log(valorSacado)

console.log(contaCorrenteAlessa);
