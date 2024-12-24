const { Console } = require('console');
const fs = require('fs');

function readFileLines(filePath) {
  return fs.readFileSync(filePath, 'utf-8').split('\n');
}

function addLineToArray(filePath) {
    const lines = readFileLines(filePath);
    for(let line of lines)
    {
      let [leftSide, Rightside] = line.split(',');
      left.push(leftSide);
      right.push(Rightside);
    }
    
  }

const left = [];
const right = [];

addLineToArray('input.txt');
left.sort();
right.sort();

let dist = 0;

for(let i = 0; i < left.length; i++)
{
    dist += Math.abs(left[i] - right[i]);
}

console.log(dist);

