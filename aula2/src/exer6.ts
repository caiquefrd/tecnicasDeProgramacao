class Operacao {
    num1:number;
    num2:number

    constructor(num1:number, num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }
    somar() :number {
        return this.num1 + this.num2
    }
    subtrair() :number{
        return this.num1 - this.num2
    }
    dividir() :number {
        return this.num1 / this.num2
    }
}



const op = new Operacao(3,5);
console.log("Soma:", op.somar());
console.log("Diferença:", op.subtrair());
console.log("Divisão:", op.dividir());