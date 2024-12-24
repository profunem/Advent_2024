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

function generateDiffs(report)
{
  const diffs = [];
  
  for(let line of report)
  {
    let arr = line.split(' ');
    let first = arr.shift(1);
    let temp = []
    for(let num of arr)
    {
      temp.push(Number(first - num));
      first = num;
    }
    diffs.push(temp);   
  }
  return diffs;
}

function isSafe(diffLine){
  if(diffLine.includes(0)) return false;

  const sign = diffLine[0] > 0;
  
  for(let diff of diffLine)
  {
    if(Math.abs(diff) > 3) return false;
    if(diff > 0 !== sign) return false;
  }
  return true;
}

const report = [];
addLineToArray('input.txt');
const diffs = generateDiffs(report);
const sus = [];

let s = 0;

//check if safe without dampen
for(let i = 0; i < diffs.length; i++)
{
  if(isSafe(diffs[i])) 
  {
    s++;
  }
  else
  {
    sus.push(diffs[i]);
  }
}

//check the sus ones
for(let line of sus)
{
  if(line.filter(d => d === 0).length > 1) continue;
  let zeroIndex = line.indexOf(0);
  line.splice(zeroIndex, 1);
  if(isSafe(line)) s++;
}

console.log(sus.length);
console.log(s);
