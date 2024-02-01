class Triangle{
    constructor(shape, color){
        this.shape = shape;
        this.color = color;
    }

    render(){
        //Double checks to make sure the user selected the triangle shape. Then returns the code for the circle svg with the selected fill color
        if(this.shape === "triangle"){
            return `<polygon points='150,0 290,190 10,190' fill='${this.color}'/>`;
        }else{
            return;
        }
    }
}

module.exports = Triangle;