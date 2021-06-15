//implement a function called areThereDuplicates which accepts a variable number
//of arguments and checks whether there are any duplicates amoung the args
//passed in.

function areThereDuplicates (args) {
  let counter = {};

  for(let i = 0; i<arguments.length; i++) {
    if(counter[arguments[i]]) {
      return true;
    } else {
      counter[arguments[i]] = 1;
    }
  }
  return false;
}