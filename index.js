//Requirements
const inquirer = require("inquirer");
const CheckText = require("./lib/text.js");
const Color = require("./lib/color.js");
const Shape = require("./lib/shape.js");
const { writeFile } = require('fs/promises');
const {join} = require('path');
const Svg = require('./lib/document.js');

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
            const checkedTextColor = new Color(textColor).checkHexCode();
            const checkedShapeColor = new Color(shapeColor).checkHexCode();

            const userText = new CheckText(text, checkedTextColor).textLength();
            const userShape = new Shape(shape, checkedShapeColor).checkShape();

            // const svgData = new Svg(userText, userShape).createSvg();
            // const filePath = join(__dirname, 'examples', 'logo.svg');

            // writeFile(filePath, svgData, (err) => {
            //     if(err){
            //         console.error('Error creating file', err);
            //     }
            // })

            writeFile(
                join(__dirname, 'examples', 'logo.svg'),
                new Svg(userText, userShape).createSvg()
              );
        })

        .then(() => {
            console.log("Created SVG Logo");
        })

        .catch((err) => {
            console.log(err);
            console.log("Something went wrong")
        })
    }  
    
}

const init = () =>{
    const cli = new CLI;
    cli.run()
    
}


init();

module.exports = CLI;