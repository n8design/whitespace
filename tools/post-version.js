// version have been passed in
if(process.argv.length !== 3){
  console.log('ERROR: No version have been passed in.');
}

const nextVersion = process.argv[2].substr(0);
console.log(nextVersion);


const fs = require('fs');
const path = require('path');


const solution = './config/package-solution.json';
const package = './package.json';

const solutionFileContent = fs.readFileSync(solution, 'UTF-8');
const packageFileContent = fs.readFileSync(package, 'UTF-8');
