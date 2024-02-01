class Square{
    constructor(shape, color){
        this.shape = shape;
        this.color = color;
    }

    render(){
        if(this.shape === "square"){
            return `<rect x='50' y='0' width='200' height='200' fill='${this.color}'></rect>`;  
        }else {
            return;
        }
        
    }
}

module.exports = Square;