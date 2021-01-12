import { Cliente } from "./Cliente";

export class ContaCorrente {
    agencia;
    _cliente;
    // #saldo = 0;aqui com # ele bloqueia para alteração do saldo inicial mas ainda recebe deposito/saque
    //_saldo não bloqueia a alteração mas a comunidade sabe q ao olhar não deve ser alterado
    _saldo = 0;

// set e get sao acessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
                this._cliente = novoValor;
            }  
    }
    get cliente (){
        return this._cliente;
    }


    get saldo(){
      return this._saldo;
    }

   sacar(valor){
        if(this._saldo >= valor ){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        //if melhorado
        //if(valor <= 0) return;
        if(valor <= 0){
            return; //early return retorno cedo para q se for menor ja para a execução
        } 
        this._saldo += valor;
    }

    transferir(valor, conta){ // quanto e pra quem // VALOR e REFERENCIA
        //neste VALOR estou trabalhando com  uma cópia do valor não é a variavel de verdade
        //em comprensação a CONTA não estou passando a cópia da conta estou passando o valor de verdade estou passando a REFERENCIA
        //temos entao a diferença TIPO DE VALOR que é cópia e não reflete na variável original e temos a "conta2" que é um OBJETO e uma REFERENCIA sempre passo ela como uma referencia para meus métodos e como estou sempre referenciando aquela conta original dentro do meu método qualquer alteração que eu fizer aqui ele vai refletir no meu objeto original
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        conta.cidade = "São Paulo";
        // add dinamicamente mais um atributo ao objeto cont, a cidade
        // valor = 20; // posso fazer qualquer alteração aqui que nao vai refletir na minha variavel la de fora
        

    }
}