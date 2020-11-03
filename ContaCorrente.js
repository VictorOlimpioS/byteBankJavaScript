import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;
    

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas ++;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get saldo() {
        return this._saldo;
    }

    

    depositar(valor){
        if(valor <= 0){
            console.log("Oepraçaão inválida")
            return;
        } 
        this._saldo += valor; 
    }

    sacar(valor){
        if(this._saldo < valor){
            console.log('Saldo insuficiente, não foi possível realizar esta operação.');
            return false;
        }
        this._saldo -= valor; 
    } 

    transferir(destino, valor){
       if( this.sacar(valor) == false){
           return;
       }
        destino.depositar(valor);
    }
}