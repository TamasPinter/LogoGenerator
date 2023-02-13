const Square = require('../lib/square.js');

//test to see if square class is a function
describe("shape", () => {
describe("square", () => {
it("should render a square shape",() => {
    const square = new Square();
const total = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">` + 
`<rect x="40" y="25" width="250" height="150" fill="${square.color}" />` +
`<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${square.textColor}">` +
`${square.text}</text>` +
`</svg>`
expect(square.render()).toEqual(total);
});
});
})