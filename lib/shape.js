const Circle = require("./circle")
const Square = require("./square")
const Triangle = require("./triangle")


class Shape {
    constructor(shape){
        this.shape = shape
    }

    checkShape(){
        if(this.shape === "circle"){
            return new Circle(this.shape).render()
        }else if(this.shape === "triangle"){
            return new Triangle(this.shape).render()
        }else if(this.shape === "square"){
            return new Square(this.shape).render();
        }
    }
}

module.exports = Shape;