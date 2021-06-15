//write a function called same frequency. given two positive integers, find out
//if the two numbers have the same frequency of digits

function sameFrequency (x, y) {
  let xStr = x.toString();
  let yStr = y.toString();

  if(xStr.length !== yStr.length) {
    return false
  };

  let xStringCounter = {}

  for(let i = 0; i<xStr.length; i++) {
    xStringCounter[xStr[i]] ? xStringCounter[xStr[i]]++ : xStringCounter[xStr[i]] = 1
  }

  for(let j = 0; j<yStr.length; j++) {
    if(xStringCounter[yStr[j]]) {
      xStringCounter[yStr[j]]--
    } else {
      return false
    }
  }

  return true;
}