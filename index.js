//Requirements
const inquirer = require("inquirer");
const CheckText = require("./lib/text.js");
const Color = require("./lib/color.js");
const Shape = require("./lib/shape.js");


class CLI {
    constructor(){
        this.text = ""
        this.textColor = ""
        this.shape = "";
        this.shapeColor = "";
    }

    run(){
     return inquirer
     .prompt([
        {
            type: "input",
            name: "text",
            message: "Enter up to three characters for your text"
        },
        
        {
            type: "input",
            name: "textColor",
            message: "Please enter a color keyword or a hexadecimal number for the color of the text"
        },

        {
            type: "list",
            name: "shape",
            message: "Please select a shape",
            choices: ["circle", "triangle", "square"]
        },

        {
            type: "input",
            name: "shapeColor",
            message:"Please enter a color keyword or a hexadecimal number for the color of the shape"
        }
        ])

        .then(({text, textColor, shape, shapeColor}) => {
            const userText = new CheckText(text).textLength();
            const userTextColor = new Color(textColor).checkHexCode();
            const userShape = new Shape(shape).checkShape();
            const userShapeColor = new Color(shapeColor).checkHexCode();

            console.log(userText);
           
            this.text = userText;
            this.textColor = userTextColor;
            this.shape = userShape;
            this.shapeColor = userShapeColor;
        })

        // .then(() => {

        // })
    }  
    
}

const init = () =>{
    const cli = new CLI;
    cli.run()
    
}


init();

module.exports = CLI;