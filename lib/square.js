const Color = require('../lib/color');

class Square{
    constructor(shape, color){
        this.shape = shape;
        this.color = color;
    }

    render(){
        const checkColor = new Color(this.color).checkHexCode();

        return `<rect x=50 y=50 width=100 height=100 fill=${checkColor}></rect>`;
    }
}

module.exports = Square;