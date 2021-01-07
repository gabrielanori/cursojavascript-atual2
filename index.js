import{Cliente} from "./C"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;


contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-1); por causa da condição ele nao deposita negativos

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado)

console.log(contaCorrenteRicardo);





/* 

console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);
 */