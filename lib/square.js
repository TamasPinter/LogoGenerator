const shape = require('./shape.js');

// create a square class and render it in svg
class square extends shape {
    constructor(color, text, textColor) {
        super();
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">` + 
        `<rect x="40" y="25" width="250" height="150" fill="${this.color}" />` +
        `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${this.textColor}">` +
        `${this.text}</text>` +
        `</svg>`
    }
}

module.exports = square;