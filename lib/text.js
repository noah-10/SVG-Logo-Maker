
class Text{
    constructor(text, color, shape){
        this.text = text;
        this.color = color;
        this.shape = shape;
    }


    textLength(){
        //Make sure the text isn't greater then 3 and will throw error if it is
        if(this.text.length > 3){
            throw new Error("Text must be less than 3 characters");
        }else{
            //Based on which shape is selected, it will render the text that corresponds with that shape
            if(this.shape === "triangle"){
                return this.renderTriangleText()
            }else if(this.shape === "circle"){
                return this.renderCircleText()
            }else{
                return this.renderSquareText()
            }
        }
    }

    renderTriangleText(){
        return `<text x='150' y='150' font-size='70' text-anchor='middle' fill='${this.color}'>${this.text}</text>`;
    }

    renderCircleText(){
        return `<text x='150' y='100' font-size='80' text-anchor='middle' dominant-baseline='middle' fill='${this.color}'>${this.text}</text>`;
    }

    renderSquareText(){
        return `<text x='150' y='120' font-size='60' text-anchor='middle' fill='${this.color}'>${this.text}</text>`;
    }
}

module.exports = Text;