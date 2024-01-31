class Square{
    constructor(shape, color){
        this.shape = shape;
        this.color = color;
    }

    render(){

        return `<rect x='50' y='50' width='100' height='100' fill='${this.color}'></rect>`;
    }
}

module.exports = Square;