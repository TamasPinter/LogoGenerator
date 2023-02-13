const shape = require('./shape.js');

//create triangle class and render it in svg
class triangle extends shape {
    constructor(color, text, textColor) {
        super();
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">` + 
        `<polygon points="150, 10 270, 182 30, 182" fill="${this.color}" stroke="black"/>` +
        `<text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${this.textColor}">` +
        `${this.text}</text>` +
        `</svg>`
    }
}

module.exports = triangle;