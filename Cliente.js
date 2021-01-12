//qdo crio um arquivo com letra maiuscula eh class
//vou na execução index.js e qdo quero  classe Cliente.js

export class Cliente{
    nome;
    _cpf;

    get cpf(){
        this._cpf;
    }
    // nao dei nenhum atributo, nenhum assessor para eu mudar o cpf

    //para atribuir algo como o CPF quando eu for criar ele  e em nenhum outro momento da vida dele
    //const5ructos funçaõ especial
    constructor(nome, cpf){
        //quero associar o nome e cpf q vai receber de parametro com o nome e cpf da minha classe cliente
        this.nome = nome;
        this._cpf = cpf;
    }
}

// nao deixar mudar o CPF