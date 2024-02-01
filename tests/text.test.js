const Text = require("../lib/text.js")


describe("UserText", () => {
    // Testing if an error is thrown when text is longer then it's suppose to
    test("should throw error if text is greater then three characters", () => {
        const createTextInstance = () => {
            const textInstance = new Text("ainfiwf", "#fff", "circle");
            textInstance.textLength();
        }

        expect(createTextInstance).toThrowError("Text must be less than 3 characters");
    })

    // Testing to make sure it return the text code if it isn't more then 3 characters long

    test("Should return the render of the full code for if the shape is circle", () => {
        const newText = new Text('mls', '#fff', 'circle');
        const newInstance = newText.textLength();

        expect(newInstance).toBe("<text x='150' y='100' font-size='80' text-anchor='middle' dominant-baseline='middle' fill='#fff'>mls</text>")
    })
})

