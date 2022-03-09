import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
const contaCorrenteAlessa = new ContaCorrente();
cliente1.nome = "Alessa";
cliente1.cpf = 43755829878;
contaCorrenteAlessa.agencia = 1001;
contaCorrenteAlessa.depositar(1000);
contaCorrenteAlessa.cliente = cliente1
const valorSacado = contaCorrenteAlessa.sacar(54);
console.log(valorSacado)
console.log(contaCorrenteAlessa);

const cliente2 = new Cliente();
cliente2.nome = "João"
cliente2.cpf = 11111111111;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2 
conta2.agencia = 1002;
console.log(cliente2);
console.log(conta2);

contaCorrenteAlessa.transferir(200,conta2);
console.log(conta2);