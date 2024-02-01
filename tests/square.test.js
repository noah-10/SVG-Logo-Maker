const Square = require("../lib/square.js");

describe("Square", () =>{

    test("Should return the render", () => {
        const testSquare = new Square("square", "#fff");
        const newInstance = testSquare.render();

        expect(newInstance).toBe("<rect x='50' y='0' width='200' height='200' fill='#fff'></rect>");
    })

    test("Should return nothing", () => {
        const testCircle = new Square("circle", "#fff");
        const newInstance = testCircle.render();

        expect(newInstance).toBe()
    })
})