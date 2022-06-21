class Shape {
    constructor(name, sideLength) {
        this.name = name;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        // let hasil;
        if(this.name === 'square'){
            return 4*this.sideLength;
        }else if(this.name === 'triangle'){
            return 3*this.sideLength;
        }else {
            return 'totet';
        }
        // return hasil;
    }
}

const square = new Shape('square',5)
const triangle = new Shape('triangle',3)

console.log('keliling square = ', square.calcPerimeter());
console.log('keliling triangle = ', triangle.calcPerimeter());