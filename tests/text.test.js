const Text = require("../lib/text.js")


describe("UserText", () => {
    // Testing if an error is thrown when text is longer then it's suppose to
    test("should throw error if text is greater then three characters", () => {
        const createTextInstance = () => {
            const textInstance = new Text("ainfiwf", "");
            textInstance.textLength();
        }

        expect(createTextInstance).toThrowError("Text must be less than 3 characters");
    })

    // Testing to make sure it return the text code if it isn't more then 3 characters long

    test("Should return the render of the full code", () => {
        const newText = new Text("mls");
        const newInstance = newText.textLength();

        expect(newInstance).toBe('<text x=150 y=125 font-size=60 text-anchor=middle>mls</text>')
    })
})

