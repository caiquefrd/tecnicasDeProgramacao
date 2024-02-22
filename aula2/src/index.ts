class Pessoa {
    nome:string = 'Ana';
    idade:number = 18;

    imprimir(){
        console.log(`${this.nome} possui ${this.idade}`)
    }
}

const p = new Pessoa();

p.imprimir();


 