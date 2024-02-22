class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

class Rectangle {

}


const sd = new Point(3,5);
const ie = new Point(1,2);

const r = new Rectangle(ie,sd);
console.log("Área:", r.area());
