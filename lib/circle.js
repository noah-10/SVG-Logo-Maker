class Circle{
    constructor(shape,color){
        this.shape = shape;
        this.color = color;
    }

    render(){
        //Double checks to make sure the user selected the circle shape. Then returns the code for the circle svg with the selected fill color
        if(this.shape === "circle"){
            return `<circle cx='150' cy='100' r='100' fill='${this.color}'></circle>`;
        }else{
            return;
        }
    }
}

module.exports = Circle;