const shape = require('./shape.js');

// create a square class and render it in svg
class square extends shape {
    constructor(color) {
        super();
        this.color = color;
    }
    render() {
        return `<rect width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = square;