class Circle{
    constructor(shape){
        this.shape = shape;
    }

    render(){
        if(this.shape === "circle"){
            return "<circle cx=150 cy=100 r=80 fill=${shapeColor}></circle>";
        }else{
            return;
        }
    }
}

module.exports = Circle;