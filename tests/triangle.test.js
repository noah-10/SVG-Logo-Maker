const Triangle = require("../lib/triangle.js");

describe("Triangle", () => {
    test("should return the render code", ()=> {
        const testTriangle = new Triangle("triangle");
        const newInstance = testTriangle.render();

        expect(newInstance).toBe("<polygon points=200,50 300,50 250,100/>");
    })

    test("Should return nothing", () => {
        const testCircle = new Triangle("circle");
        const newInstance = testCircle.render();

        expect(newInstance).toBe();
    })
})