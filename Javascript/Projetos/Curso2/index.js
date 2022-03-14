import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente = new Cliente("Alessa", 43755829878);
const conta = new ContaCorrente(1001, cliente);
conta.depositar(3000);
//conta.cliente = null -> deixa explicito que é nulo direfente de undefined que pode ser pq alguem esqueceu de colocar o valor do atributo


console.log(conta.numeroDeContas);
