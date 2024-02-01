//Requirements
const inquirer = require("inquirer");
const Text = require("./lib/text.js");
const Color = require("./lib/color.js");
const Shape = require("./lib/shape.js");
const { writeFile } = require('fs/promises');
const {join} = require('path');
const Svg = require('./lib/document.js');

class CLI {

    run(){
     return inquirer
     // Prompts the questions
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
            // Checks each color to make sure they follow the restrictions
            const checkedTextColor = new Color(textColor).checkHexCode();
            const checkedShapeColor = new Color(shapeColor).checkHexCode();

            //Gets the code for the text that includes the fill color and selects the layout of the text based on which shape is selected
            const userText = new Text(text, checkedTextColor, shape).textLength();
            const userShape = new Shape(shape, checkedShapeColor).checkShape();

            // Creates the file
            writeFile(
                join(__dirname, 'examples', 'logo.svg'),
                new Svg(userText, userShape).createSvg()
              );
        })

        // Logs if svg is generated
        .then(() => {
            console.log("Created SVG Logo");
        })

        // If error, it will be displayed in the console
        .catch((err) => {
            console.log(err);
            console.log("Something went wrong")
        })
    }  
    
}

//Initiates the prompts when called
const init = () =>{
    const cli = new CLI;
    cli.run()
    
}

//Calls when terminal is initiated
init();

module.exports = CLI;