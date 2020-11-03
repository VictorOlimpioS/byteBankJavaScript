import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';


const cliente1 = new Cliente('Victor', 99999999);
const cliente2 = new Cliente('Débora', 88888888);


const contaCliente1 = new ContaCorrente(1001, cliente1);
const contaCliente2 = new ContaCorrente(1001, cliente2);


contaCliente1.depositar(100);

contaCliente1.sacar(500);

contaCliente1.depositar(100);

contaCliente1.sacar(150);

contaCliente1.depositar(-1);

contaCliente1.transferir(contaCliente2,100);

console.log( contaCliente1);
console.log(contaCliente2);
console.log(ContaCorrente.numeroDeContas);


