class Questao{
    frase:string;
    nota:number

    constructor(fraseFornecida:string, notaFornecida:number){
        this.frase = fraseFornecida;
        this.nota = notaFornecida;
        
    }
    print() :void{
        console.log (this.frase, `(${this.nota} pts.)`)
    }
}


const questao = new Questao("O que é um array?", 0.5);
questao.print();
