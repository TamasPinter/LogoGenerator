const Shape = require('../lib/shape.js');

//test to make sure shape throws an error if not given a shape
describe("shape", () => {
    it("should throw an error if not given a shape", () => {
      const shape = new Shape();
      const error = new Error("Child class must implement render() method");
        expect(shape.render()).toThrow(new Error);
    });  
})