import Funcionario from "./Funcionario";

export default class Horista extends Funcionario {
    horas:number;
    funcao:string

    constructor(matricula:number, nome:string, idade:number, email:string, salario:number, horas:number, funcao:string){
        super(matricula, nome, idade, email, salario);
        this.horas = horas;
        this.funcao = funcao;
        if((this.validaEmail() == false )){
            console.log("e-Mail inválido, vai tricolor!")
        }
    }

    validaEmail(): boolean {
        const regex = /^[^\s@]+@(adm|dev|vendas)\.xpto\.tec\.br$/;
        return regex.test(this.email)
    }
    calcSalario(): number {
        return this.calcSalarioBruto() + this.calcDsr() - this.calcINSS()
    }
    calcINSS(): number {
        let aliquota:number;
        if(this.calcSalarioBruto() > 1412.01 && this.calcSalarioBruto() <= 2666.68 ){
            aliquota = 0.09
        }
        else if(this.calcSalarioBruto() >= 2666.68 && this.calcSalarioBruto() <= 4000.03){
            aliquota = 0.12
        }
        else if(this.calcSalarioBruto() >= 4000.04 && this.calcSalarioBruto() <= 7786.02){
            aliquota = 0.14
        }
        else {
            aliquota = 0.075
        }
        let salarioReal = this.calcSalarioBruto() + this.calcDsr()
        let valorContribuicao = salarioReal * aliquota
        return valorContribuicao
    }
    calcDsr():number{
        const dsr = this.calcSalarioBruto() / 25 * 4
        return dsr
    }
    calcSalarioBruto():number{
        return this.salario * this.horas
    }
}