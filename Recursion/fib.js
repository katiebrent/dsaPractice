//write a function that accepts a number and returns the nth number in the
//fibonacci sequence. A fibonacci sequence is the sequence of whole numbers
//which starts with 1 and 1 and where every number thereafter equals the sum
//of the previous two numbers.


function fib (n) {
  if(n === 0) {
    return 1;
  }

  var prev = 1;
  var curr = 1;

  var helper = function(n) {
    if(n === 2) {
      return;
    };

    var lastCurr = curr;
    var lastPrev = prev;

    prev = lastCurr;
    curr = lastCurr + lastPrev;

    helper(n - 1)
  }

  helper(n);
  return curr;
}

console.log(fib(10));