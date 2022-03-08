
class Cliente{
    nome;
    cpf;   
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -=valor;
        }
        else{
            console.log("Saldo insuficiente.");
        }
    }
    deposito(valor){
        if(valor > 0){
            this.saldo +=valor;
        }
        else{
            console.log("Depósito recusado");
        }
    }
}



const cliente1 = new Cliente();
const contaCorrenteAlessa = new ContaCorrente();
contaCorrenteAlessa.saldo = 200;
contaCorrenteAlessa.sacar(50);
cliente1.nome = "Alessa";
cliente1.cpf = 43755829878;

console.log(contaCorrenteAlessa.saldo);

console.log(cliente1);
