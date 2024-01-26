const Text = require("../lib/text.js")


describe("UserText", () => {
    // Testing if an error is thrown when text is longer then it's suppose to
    test("should throw error if text is greater then three characters", () => {
        const createTextInstance = () => {
            const textInstance = new Text("ainfiwf");
            textInstance.textLength();
        }

        expect(createTextInstance).toThrowError("Text must be less than 3 characters");
    })

    // Testing to make sure it return the text if it isn't more then 3 characters long
    test("should return the original text", () => {
        const textInstance = new Text("nf");
        const result = textInstance.textLength();
        expect(result).toBe("nf");

        expect(result).toBe("nf");
    })
})

