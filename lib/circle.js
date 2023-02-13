const shape = require('./shape.js');

// create circle class and render it in svg
class circle extends shape {
    constructor(color, text, textColor) {
        super();
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">` + 
        `<circle cx="150" cy="100" r="80" fill="${this.color}" />` +
        `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${this.textColor}">` +
        `${this.text}</text>` +
        `</svg>`
    }
}

module.exports = circle;