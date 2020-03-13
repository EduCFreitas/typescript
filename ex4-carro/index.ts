// Início da definição de classe
class MeuCarro{
    // Atributos
    marca:string;
    anoFabricacao:number;
    velMax:number;
    velAtual:number;

    // Método construtor
    constructor(_marca:string, _anoFabricacao:number, _velMax:number, _velAtual:number=0){
        this.marca=_marca;
        this.anoFabricacao=_anoFabricacao;
        this.velMax=_velMax;
        this.velAtual=_velAtual;
    }

    // Método acelerar
    acelerar(marca:string, velMax:number, velAtual:number){
        for(var i=this.velAtual; i<=this.velMax; i++){
            if(this.velAtual<this.velMax){
                this.velAtual++;
                console.log(`Acelerando. A velocidade atual do carro ${this.marca} é de ${this.velAtual}km/h.`)
            }else{
                console.log(`O carro de marca ${this.marca} já está na velocidade máxima de ${this.velMax}km/h`)
            }
        }
    }

    // Método desacelerar
    desacelerar(marca:string, velMax:number, velAtual:number){
        for(var i=this.velAtual; i>=0; i--){
            if(this.velAtual>0){
                this.velAtual--;
                console.log(`Desacelerando. A velocidade atual do carro ${this.marca} é de ${this.velAtual}km/h`)
            }else{
                console.log(`O carro ${this.marca} chegou à imobilidade`)
            }
        }
    }
}
// Fim da definição da classe

// Instanciando
// let carro1=new MeuCarro("Toyota", 2006, 186, 120);
// let carro2=new MeuCarro("Chevrolet", 2020, 300, 280);
// let carro3=new MeuCarro("Dodge", 2018, 280, 0);
var carro1=new MeuCarro("Toyota", 2006, 186, 120);
console.log(carro1.acelerar('Toyota', 186, 120));