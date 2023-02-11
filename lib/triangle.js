const shape = require('./shape.js');

//create triangle class and render it in svg
class triangle extends shape {
    constructor(color) {
        super();
        this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = triangle;