console.log(this);
console.log(process.argv);

const fs = require('fs');
const path = require('path');


const solution = './config/package-solution.json';
const package = './package.json';

const solutionFileContent = fs.readFileSync(solution, 'UTF-8');
const packageFileContent = fs.readFileSync(package, 'UTF-8');
