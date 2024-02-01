const Circle = require("./circle")
const Square = require("./square")
const Triangle = require("./triangle")


class Shape {
    constructor(shape, color){
        this.shape = shape
        this.color = color
    }

    // Checks which shape is selected and renders the correct code based on shape
    checkShape(){
        if(this.shape === "circle"){
            return new Circle(this.shape, this.color).render()
        }else if(this.shape === "triangle"){
            return new Triangle(this.shape, this.color).render()
        }else if(this.shape === "square"){
            return new Square(this.shape, this.color).render();
        }
    }
}

module.exports = Shape;