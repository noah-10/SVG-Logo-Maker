class Square{
    constructor(shape, color){
        this.shape = shape;
        this.color = color;
    }

    render(){
        //Double checks to make sure the user selected the square shape. Then returns the code for the circle svg with the selected fill color
        if(this.shape === "square"){
            return `<rect x='50' y='0' width='200' height='200' fill='${this.color}'></rect>`;  
        }else {
            return;
        }
        
    }
}

module.exports = Square;