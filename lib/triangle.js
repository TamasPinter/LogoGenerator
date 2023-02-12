const shape = require('./shape.js');

//create triangle class and render it in svg
class triangle extends shape {
    constructor(color, text) {
        super();
        this.color = color;
        this.text = text;
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="250" height="250">` + 
        `<polygon points="125, 10 219, 182 31, 182" fill="${this.color}" stroke="black"/>` +
        `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="black">` +
        `${this.text}</text>` +
        `</svg>`
    }
}

module.exports = triangle;