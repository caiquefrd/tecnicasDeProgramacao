class Retangulo {
  base: number;
  altura: number;
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  area(): number {
    return this.base * this.altura;
  }
  perimetro(): number {
    return 2 * this.base + 2 * this.altura;
  }
}


const a = new Retangulo(2,3);
const b = new Retangulo(2,3);

console.log(a.area());
console.log(b.perimetro());