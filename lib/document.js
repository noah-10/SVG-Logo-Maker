
 

const createSvg = ({text, shape}) => {
    `<svg xmlns = http://www.w3.org/2000/svg version=1.1 width=300 height=200>
        ${shape}
        ${text}
    </svg>`
}

module.exports = createSvg;