const shape = require('./shape.js');

// create a square class and render it in svg
class square extends shape {
    constructor(color, text) {
        super();
        this.color = color;
        this.text = text;
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="250" height="250">` + 
        `<rect x="40" y="40" width="210" height="210" fill="${this.color}" />` +
        `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="black">` +
        `${this.text}</text>` +
        `</svg>`
    }
}

module.exports = square;