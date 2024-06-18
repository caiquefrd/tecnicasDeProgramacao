import Mensalista from "./Mensalista";
import Horista from "./Horista";

const mensalista = new Mensalista(1, "Fulano", 18, "fulano@adm.xpto.tec.br",1412,1,"Estagiário");
console.log("<< mensalistaALISTA >>");
console.log("Matricula: ",mensalista.matricula);
console.log("Nome: ",mensalista.nome);
console.log("e-Mail: ",mensalista.email," - ", mensalista.validaEmail()?"Válido":"Inválido");
console.log("Idade: ",mensalista.idade);
console.log("Cargo: ",mensalista.cargo);
console.log("(+) Salário Mês: ",mensalista.salario.toLocaleString('pt-BR', { style: 'currency', currency:
'BRL' }));
console.log("(-) Falta(s) ",mensalista.faltas,"dia(s): ",mensalista.calcFaltas().toLocaleString('pt-BR', { style:
'currency', currency: 'BRL' }));
console.log("(-) INSS: ",mensalista.calcINSS().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
}));
console.log("(=) Salário Líquido: ",mensalista.calcSalario().toLocaleString('pt-BR', { style: 'currency',
currency: 'BRL' }));


const horista = new Horista(15, "Cicrano", 30, "cicrano@gmail.com",50,100,"Técnico Redes");
console.log("<< HORISTA >>");
console.log("Matricula: ",horista.matricula);
console.log("Nome: ",horista.nome);
console.log("e-Mail: ",horista.email," - ", horista.validaEmail()?"Válido":"Inválido");
console.log("Idade: ",horista.idade);
console.log("Função: ",horista.funcao);
console.log("Quantidades horas Trabalhadas no mês: ",horista.horas);
console.log("Valor hora: ",horista.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
}));
console.log("(+) Salário Bruto: ",horista.calcSalarioBruto().toLocaleString('pt-BR', { style: 'currency',
    currency: 'BRL' }));
    console.log("(+) Descanso Semanal Remunerado: ",horista.calcDsr().toLocaleString('pt-BR', { style:
    'currency', currency: 'BRL' }));
    console.log("(=) Salário Mês: ",(horista.calcSalarioBruto()+horista.calcDsr()).toLocaleString('pt-BR', { style:
    'currency', currency: 'BRL' }));
    console.log("(-) INSS: ",horista.calcINSS().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'
    }));
    console.log("(=) Salário Líquido: ",horista.calcSalario().toLocaleString('pt-BR', { style: 'currency',
    currency: 'BRL' }));