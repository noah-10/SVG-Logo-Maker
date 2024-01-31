class Circle{
    constructor(shape,color){
        this.shape = shape;
        this.color = color;
    }

    render(){
        if(this.shape === "circle"){
            return `<circle cx='150' cy='100' r='80' fill='${this.color}'></circle>`;
        }else{
            return;
        }
    }
}

module.exports = Circle;