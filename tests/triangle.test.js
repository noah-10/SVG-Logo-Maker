const Triangle = require("../lib/triangle.js");

describe("Triangle", () => {
    test("should return the render code", ()=> {
        const testTriangle = new Triangle("triangle", "#fff");
        const newInstance = testTriangle.render();

        expect(newInstance).toBe("<polygon points='150,0 290,190 10,190' fill='#fff'/>");
    })

    test("Should return nothing", () => {
        const testCircle = new Triangle("circle", "#fff");
        const newInstance = testCircle.render();

        expect(newInstance).toBe();
    })
})