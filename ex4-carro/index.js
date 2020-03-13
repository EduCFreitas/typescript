// Início da definição de classe
var MeuCarro = /** @class */ (function () {
    // Método construtor
    function MeuCarro(_marca, _anoFabricacao, _velMax, _velAtual) {
        if (_velAtual === void 0) { _velAtual = 0; }
        this.marca = _marca;
        this.anoFabricacao = _anoFabricacao;
        this.velMax = _velMax;
        this.velAtual = _velAtual;
    }
    // Método acelerar
    MeuCarro.prototype.acelerar = function (marca, velMax, velAtual) {
        for (var i = this.velAtual; i <= this.velMax; i++) {
            if (this.velAtual < this.velMax) {
                this.velAtual++;
                console.log("Acelerando. A velocidade atual do carro " + this.marca + " \u00E9 de " + this.velAtual + "km/h.");
            }
            else {
                console.log("O carro de marca " + this.marca + " j\u00E1 est\u00E1 na velocidade m\u00E1xima de " + this.velMax + "km/h");
            }
        }
    };
    // Método desacelerar
    MeuCarro.prototype.desacelerar = function (marca, velMax, velAtual) {
        for (var i = this.velAtual; i >= 0; i--) {
            if (this.velAtual > 0) {
                this.velAtual--;
                console.log("Desacelerando. A velocidade atual do carro " + this.marca + " \u00E9 de " + this.velAtual + "km/h");
            }
            else {
                console.log("O carro " + this.marca + " chegou \u00E0 imobilidade");
            }
        }
    };
    return MeuCarro;
}());
// Fim da definição da classe
// Instanciando
// let carro1=new MeuCarro("Toyota", 2006, 186, 120);
// let carro2=new MeuCarro("Chevrolet", 2020, 300, 280);
// let carro3=new MeuCarro("Dodge", 2018, 280, 0);
var carro1 = new MeuCarro("Toyota", 2006, 186, 120);
console.log(carro1.acelerar('Toyota', 186, 120));
