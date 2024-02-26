import Point from "./exer7";


class Rectangle{
  point1:Point;
  point2:Point;

  constructor(point1:Point, point2:Point){
    this.point1 = point1;
    this.point2 = point2;
  }
  area():number{
    const b:number = this.point1.x - this.point2.x;
    const h:number = this.point1.y - this.point2.y;
    return b * h;
  }
}


const sd = new Point(3,5);
const ie = new Point(1,2);

const r = new Rectangle(ie,sd);
console.log("Área:", r.area());
