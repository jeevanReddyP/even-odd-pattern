
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  function printPattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        pattern += '*';
      }
      pattern += '\n';
    }
    console.log(pattern);
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log("Even Numbers:", findEvenNumbers(numbers));
  console.log("Odd Numbers:", findOddNumbers(numbers));
  printPattern(5);
  