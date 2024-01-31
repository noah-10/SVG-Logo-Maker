class Color {
    constructor(color){
        this.color = color;
    }

    checkHexCode(){
        const regExp = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;

        if(regExp.test(this.color)){
            return this.renderColor();
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

    renderColor(){
        return this.color;
    }
}

module.exports = Color;