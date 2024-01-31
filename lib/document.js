class Svg {

    constructor(text, shape){
        this.text = text;
        this.shape = shape
    }

    createSvg(){
    return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
        ${this.shape}
        ${this.text}
</svg>`
    }
}
 



module.exports = Svg;