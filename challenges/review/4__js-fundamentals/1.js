// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.
function divisibleByThree(num){
  if(num%3 === 0){
    return true;
  }
  return false;
}
console.log(divisibleByThree(9));
console.log(divisibleByThree(12));
console.log(divisibleByThree(1));
console.log(divisibleByThree(2));