class ContaCorrente {
    agencia;
   // #saldo = 0;aqui com # ele bloqueia para alteração do saldo inicial mas ainda recebe deposito/saque
  //_saldo não bloqueia a alteração mas a comunidade sabe q ao olhar não deve ser alterado
   _saldo = 0 
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
}