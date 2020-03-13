// Início da definição da classe ----------------------------
var Cumprimento = /** @class */ (function () {
    // Método construtor
    function Cumprimento(_nome, _idade) {
        if (_nome === void 0) { _nome = ''; }
        if (_idade === void 0) { _idade = 0; }
        this.nome = _nome;
        this.idade = _idade;
    }
    // Outro método
    Cumprimento.prototype.mostrarNomeIdade = function (idade, nome) {
        return "A pessoa " + nome + " tem " + idade + " anos";
    };
    return Cumprimento;
}());
// Fim da definição da classe -------------------------------
// Invocando a função e o resultado será armazenado na variável "resposta"
var pessoa1 = new Cumprimento(); //Cria objeto
console.log(pessoa1.mostrarNomeIdade(26, 'Eduardo')); //Utilizando um método do objeto resposta
