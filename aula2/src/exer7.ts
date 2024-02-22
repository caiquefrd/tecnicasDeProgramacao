class Ponto {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  distancia(ponto: Ponto): number {
    return Math.sqrt((this.x - ponto.x) ** 2 + (this.y - ponto.y) ** 2);
  }
}

const a = new Ponto(3, 5);
const b = new Ponto(1, 2);

console.log(a.distancia(b));

export{};
