
class Text{
    constructor(text){
        this.text = text;
    }

    textLength(){
        if(this.text.length > 3){
            throw new Error("Text must be less than 3 characters");
        }else{
            return this.render();
        }
    }

    render(){
        return `<text x=150 y=125 font-size=60 text-anchor=middle>${this.text}</text>`
    }
}

module.exports = Text;