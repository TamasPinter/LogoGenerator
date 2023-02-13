const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./shape.js');
const triangle = require('./triangle.js');
const circle = require('./circle.js');
const square = require('./square.js');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

// use inquirer to prompt user for shape and color and text
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
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
        type: 'maxlength-input',
        message: 'What text would you like to use?',
        name: 'text',
        maxLength: 3,
    },
    {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'textColor',
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
    // pass text input to shapeChosen
    shapeChosen.text = response.text;
    shapeChosen.textColor = response.textColor;
   
    // create an svg file with the shape and text
    const svg = `<svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
    ${shapeChosen.render()}`
    
    // write the svg file to the output folder
    fs.writeFile('logo.svg', shapeChosen.render(), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
})

