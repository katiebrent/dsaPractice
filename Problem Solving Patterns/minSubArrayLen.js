//write a function called minSubArrayLen which accepts two parameters:
//an array of positive integers and a positive integer

function minSubArrayLen (arr, sum) {

  var minCount = Infinity;

  var curr = 0;
  var end = 0;

  var minSum= 0;

  while(end < arr.length) {
    if(arr[curr] >= sum) {
      return 1;
    }
    if(minSum >= sum) {
      let tempCount = end - curr + 1;
      if(tempCount < minCount) {
        minCount = tempCount;
        curr++;
        end = curr;
      }
    } else {
      minSum += arr[curr];
      end++
    }

  }
  return minCount;
}

