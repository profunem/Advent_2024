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
      left.push(Number(leftSide));
      right.push(Number(Rightside));
    }
    
  }

const left = [];
const right = [];

addLineToArray('input.txt');
left.sort();
right.sort();

let totalSim = 0;

for(let i = 0; i < left.length; i++)
{
  let cur = left[i];
  if(right.includes(cur))
  {
    simScore = cur * right.filter(n => n === cur).length;
    totalSim += simScore;
  }
}

console.log(totalSim);