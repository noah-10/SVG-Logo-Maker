const Color = require("../lib/color.js" );

describe("Color", () => {

    //Checks to make sure it throws an error for a bad hex code representation
    test("Should throw error code for bad hex code", () => {
        const newColorInstance = () => {
            const colorInstance = new Color("#zzd3");
            colorInstance.checkHexCode(); 
        }

        expect(newColorInstance).toThrowError("Please double check your hex code");
    })

    // make sure it renders a good hex code representation
    test("Should return the original hex code", () => {
        const colorInstance = new Color("#a5b");
        const result = colorInstance.checkHexCode();

        expect(result).toBe("#a5b");
    })

    test("Should return true for a valid color name", () => {
        const colorInstance = new Color("red");
        const result = colorInstance.checkColor();

        expect(result).toBe(true);
    })
})