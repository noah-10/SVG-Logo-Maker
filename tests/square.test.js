const Square = require("../lib/square.js");

describe("Square", () =>{

    test("Should return the render", () => {
        const testSquare = new Square("square");
        const newInstance = testSquare.render();

        expect(newInstance).toBe("<rect x=50 y=50 width=100 height=100></rect>");
    })

    test("Should return nothing", () => {
        const testCircle = new Square("circle");
        const newInstance = testCircle.render();

        expect(newInstance).toBe()
    })
})