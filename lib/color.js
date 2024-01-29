class Color {
    constructor(textColor, shapeColor){
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    checkHexCode(){
        const regExp = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;

        if(regExp.test(this.textColor)){
            this.renderTextColor()

        }else if(regExp.test(this.shapeColor)){
            this.renderShapeColor()

        }
        else{
            throw new Error("Please double check your hex code")
        }
    }

    // checkColor(){
    //     const style = new Option().style;
    //     style.color = this.color;
        
    //     return style.color === this.color
    // }

    renderTextColor(){
        return this.textColor;
    }

    renderShapeColor(){
        return this.shapeColor
    }
}

module.exports = Color;