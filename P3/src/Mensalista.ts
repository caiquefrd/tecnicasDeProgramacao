import Funcionario from "./Funcionario";

export default class Mensalista extends Funcionario{
    faltas: number;
    cargo: string;
    
    constructor(matricula:number, nome:string, idade:number, email:string, salario:number, faltas:number, cargo:string ){
        super(matricula, nome, idade, email, salario);
        this.faltas = faltas;
        this.cargo = cargo
    }
    validaEmail(): boolean {
        const regex = /^[^\s@]+@(adm|dev|vendas)\.xpto\.tec\.br$/
        return regex.test(this.email)
    }
    calcSalario(): number {
        const salario = this.salario - this.calcFaltas() - this.calcINSS();
        return salario;
    }
    calcFaltas():number{
        const faltas = this.salario / 30 * this.faltas
        return faltas
    }
    calcINSS(): number {
        let aliquota:number;
        if(this.salario > 1412.01 && this.salario <= 2666.68 ){
            return aliquota = 0.09
        }
        else if(this.salario >= 2666.68 && this.salario <= 4000.03){
            return aliquota = 0.12
        }
        else if(this.salario >= 4000.04 && this.salario <= 7786.02){
            return aliquota = 0.14
        }
        else {
            aliquota = 0.075
        }
        let salarioReal = this.salario - this.calcFaltas()
        let valorContribuicao = salarioReal * aliquota
        return valorContribuicao
    }

}