const Circle = require("../lib/circle.js")

describe("Circle", () => {

    //Make sure it returns the code for a circle if user chose a circle
    test("Should return the render", () => {

        const testCircle = new Circle("circle", "#fff");
        const newInstance = testCircle.render();

        expect(newInstance).toBe("<circle cx='150' cy='100' r='100' fill='#fff'></circle>");

    })

    // make sure it returns nothing if user chose a different shape
    test("Should return nothing", () => {

        const testTriangle = new Circle("triangle", "#fff");
        const newInstance = testTriangle.render();

        expect(newInstance).toBe();

    })
})