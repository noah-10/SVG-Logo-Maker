const Shape = require("../lib/shape.js");

describe("Shape", () => {
    test("Should return the render for circle", () => {
        const testCircle = new Shape("circle");
        const newInstance = testCircle.checkShape();

        expect(newInstance).toBe("<circle cx=150 cy=100 r=80></circle>")
    })

    test("Should return the render for triangle", () => {
        const newTriangle = new Shape("triangle");
        const newInstance = newTriangle.checkShape();

        expect(newInstance).toBe("<polygon points=200,50 300,50 250,100/>");
    })

    test("Should return the render for square", () => {
        const newSquare = new Shape("square");
        const newInstance = newSquare.checkShape();

        expect(newInstance).toBe("<rect x=50 y=50 width=100 height=100></rect>");
    })
})