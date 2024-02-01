class Color {
    constructor(color){
        this.color = color;
    }

    //Checks if color is a hex code or a name of a color
    checkColor(){
        
        if(this.color.startsWith("#")){
            return this.checkHexCode();
        }
        else{
            return this.checkColorName();
        }
    }

    //Checks if the hex code follows the correct requirements to be a hex code
    checkHexCode(){
        const regExp = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;

        if(regExp.test(this.color)){
            return this.renderColor();
        }
        else{
            throw new Error("Please double check your hex code")
        }
    }

    // Checks if the name of color matches one of the valid colors
    checkColorName(){
        const validColors = [
            "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black",
            "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse",
            "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan",
            "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", 
            "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue",
            "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray",
            "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
            "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred",
            "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", 
            "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen",
            "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", 
            "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon",
            "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen",
            "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
            "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab",
            "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
            "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple",
            "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell",
            "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue",
            "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke",
            "yellow", "yellowgreen"
        ];

        const lowerCaseInput = this.color.toLowerCase();

        if(validColors.includes(lowerCaseInput)){
            return this.renderColor()
        }
        else{
            throw new Error("Please double check your color");
        }
    }

    renderColor(){
        return this.color;
    }
}

module.exports = Color;