//write function called isSubsequence which takes in two strings and checks
//whether the characters in the first string for a subsequence of the
//characters in the second string

//function should check whether the characters in the first string appear
//somewhere in the second string without their order changing

function isSubsequence (str1, str2) {
  if(str1.length > str2.length) {
    return false;
  }

var str1Index = 0;
var str2Index = 0;

while(str2Index < str2.length) {
  if(str2[str2Index] === str1[str1Index]) {
    str1Index++
    str2Index++
  } else {
    str2Index++
  }
}
if(str1Index === str1.length) {
  return true
} else {
  return false
}
}