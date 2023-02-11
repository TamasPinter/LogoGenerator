const shape = require('./shape.js');

// create circle class and render it in svg
class circle extends shape {
    constructor(color) {
        super();
        this.color = color;
    }
    render() {
        return `<circle cx="125" cy="125" r="95" fill="${this.color}" />`;
    }
}

module.exports = circle;