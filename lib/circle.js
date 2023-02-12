const shape = require('./shape.js');

// create circle class and render it in svg
class circle extends shape {
    constructor(color, text) {
        super();
        this.color = color;
        this.text = text;
    }
    render() {
        return `<circle cx="125" cy="125" r="95" fill="${this.color}" />`;
    }
}

module.exports = circle;