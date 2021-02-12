class Polygon{
    constructor(arr){
        this.array = arr;
    }
    perimeter(){
       let sides = this.array;
       let temp = 0;
       for(let i=0;i<sides.length;i++){
            temp += sides[i];
       }
       return temp;
    }
} 


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());