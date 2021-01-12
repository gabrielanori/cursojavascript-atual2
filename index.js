import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309); // <<<---- com os parenteses ele esta chamando o constructor daquela Classe Cliente quando nao temos o constructor o JavaScript vai gerar automatico e implicito um constructor que nao vai fazer nada, vai reservar o espaço na memória mas nao vai ter nenhuma função
//cliente1.nome = "Ricardo"; tiro isso e coloco como parametro
//cliente1.cpf = 11122233309;

 const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309; 

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 =  new ContaCorrente();
//conta2.cliente = cliente2;
conta2.cliente = new Cliente();
conta2.cliente.nome = "Alice"
conta2.cliente.cpf = 88822233309;
conta2.agencia = 102;


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2); // aqui conta2 entrou como parametro do metodo transferir em que ele adiciona a cidade sao paulo 

console.log("valor: ", valor)
console.log(conta2)
console.log(contaCorrenteRicardo);

//contaCorrenteRicardo.depositar(100);
//contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-1); por causa da condição ele nao deposita negativos
//const valorSacado = contaCorrenteRicardo.sacar(50);
//console.log(valorSacado)




/* 

console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);
 */