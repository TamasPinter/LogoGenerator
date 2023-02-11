

//create a shape class
class shape {
    constructor(children = []) {
        this.children = children;
    }
    render() {
        throw new Error("Child class must implement render() method");
    }
    renderShapeChosen() {
        return this.children
    }
}

module.exports = shape;