const Shape = require("../lib/shape.js");

describe("Shape", () => {
    test("Should return the render for circle", () => {
        const testCircle = new Shape("circle", "#fff");
        const newInstance = testCircle.checkShape();

        expect(newInstance).toBe("<circle cx='150' cy='100' r='100' fill='#fff'></circle>")
    })

    test("Should return the render for triangle", () => {
        const newTriangle = new Shape("triangle", "#fff");
        const newInstance = newTriangle.checkShape();

        expect(newInstance).toBe("<polygon points='150,0 290,190 10,190' fill='#fff'/>");
    })

    test("Should return the render for square", () => {
        const newSquare = new Shape("square", "#fff");
        const newInstance = newSquare.checkShape();

        expect(newInstance).toBe("<rect x='50' y='0' width='200' height='200' fill='#fff'></rect>");
    })
})