const Svg = require('../lib/document.js')

describe('createSVG', () => {
    test('Should return the code for the svg file', () => {
        const text = "<text x='150' y='125' font-size='60' text-anchor='middle'>mls</text>";
        const shape = "<rect x='50' y='50' width='100' height='100' fill='#fff'></rect>";
        const newSvg = new Svg(text, shape);
        const newInstance = newSvg.createSvg();

        expect(newInstance).toBe(`<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
        <rect x='50' y='50' width='100' height='100' fill='#fff'></rect>
        <text x='150' y='125' font-size='60' text-anchor='middle'>mls</text>
</svg>`)
    })
})