class Carro {
  marca:string = ""
  modelo:string = ""
  setMarca(marca: string): void {
    this.marca = marca;
  }
  setModelo(modelo: string): void {
    this.modelo = modelo;
  }
  print(): void {
    console.log(`${this.marca} ${this.modelo}`);
  }
}


const carro1 = new Carro();
carro1.setMarca('VW');
carro1.setModelo('Gol');
carro1.print();