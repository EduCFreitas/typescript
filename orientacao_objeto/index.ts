// Início da definição da classe ----------------------------
class Cumprimento{
    // Atributos       nome_do_atributo:tipo
    nome:string;
    idade:number;

    // Método construtor
    constructor(_nome:string='', _idade:number=0){
        this.nome=_nome;
        this.idade=_idade;
    }

    // Outro método
    mostrarNomeIdade(idade:number, nome:string){
        return `A pessoa ${nome} tem ${idade} anos`
    }
}
// Fim da definição da classe -------------------------------

// Invocando a função e o resultado será armazenado na variável "resposta"
let pessoa1 = new Cumprimento(); //Cria objeto
console.log(pessoa1.mostrarNomeIdade(26, 'Eduardo')); //Utilizando um método do objeto resposta