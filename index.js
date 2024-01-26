//Requirements
const inquirer = require("inquirer");
const CheckText = require("./lib/text.js")

class CLI {
    constructor(){
        this.text = ""
        this.textColor = ""
        this.shape = "";
        this.shapeColor = "";
    }

    run(){
     return inquirer.prompt([
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
    }  
    
}

const init = () =>{
    const cli = new CLI;
    cli.run()
    .then((text) => {
        const userText = new CheckText(text).textLength();
        console.log(userText);
    })
}


init();

module.exports = CLI;