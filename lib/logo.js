const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./shape.js');
const triangle = require('./triangle.js');
const circle = require('./circle.js');
const square = require('./square.js');

// use inquirer to prompt user for shape and color and text
inquirer
.prompt ([
    {
        type: 'list',
        message: 'What shape would you like to use?',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        message: 'What color would you like your logo shape to be?',
        name: 'color',
    },
    {
        type: 'input',
        message: 'What text would you like to use?',
        name: 'text',
    },
])
.then((response) => {
    // create an svg shape based on user input
    let shapeChosen;
    if (response.shape === 'Triangle') {
        shapeChosen = new triangle(response.color);
    } else if (response.shape === 'Circle') {
        shapeChosen = new circle(response.color);
    } else if (response.shape === 'Square') {
        shapeChosen = new square(response.color);
    }
    // create an svg text based on user input
    const text = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="black">${response.text}</text>`;
    // create an svg file with the shape and text
    const svg = `<svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
    ${shapeChosen.render()}
    ${text}
    </svg>`;
    // write the svg file to the output folder
    fs.appendFile('./examples/logo.svg', svg, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
})

