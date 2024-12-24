const fs = require('fs');

function readFileLines(filePath) {
  return fs.readFileSync(filePath, 'utf-8').split('\n');
}

function addLineToArray(filePath) {
    const lines = readFileLines(filePath);
    for(let line of lines)
    {
      report.push(line);      
    }    
}

function isSafe(lineReport){
  const arr = lineReport.split(' ');
  console.log(arr);
  const diffs = [];

  let first = arr.shift(1);
  for(let num of arr)
  {
    diffs.push(Number(first - num));
    first = num;
  }

  if(diffs.includes(0)) return false;

  const sign = diffs[0] > 0;
  
  for(let diff of diffs)
  {
    if(Math.abs(diff) > 3) return false;
    if(diff > 0 !== sign) return false;
  }
  console.log(diffs);
  return true;
}

const report = [];
addLineToArray('input.txt');

let safeReport = 0;

for(let i of report)
{
  if(isSafe(i)) safeReport++;
}

console.log(safeReport);