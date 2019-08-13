// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let input = "";
// process.stdin.on("data", function (chuck) {
//   input += chuck;
// });
// process.stdin.on("end", function () {
//   //...
//   console.log(input);

// })
let items = [[1], [2], [1, 10], [24, 29]];

for (let row = 0; row < items.length; row++) {
  printPrime(items[row]);
}

function printPrime(array) {
  let hasPrime = false;
  if (array.length < 2) {  // only has 1 number
    if (isPrime(array[0])) {
      console.log(array[0]);
      hasPrime = true;
    }
  } else {                 // assume there are 2 numbers in the array
    for (let i = array[0]; i < array[1]; i++) {
      if (isPrime(i)) {
        if (!hasPrime) {
          hasPrime = true;
        }
        console.log(i);
      }
    }
  }
  if (!hasPrime) {
    console.log('none')
  }
  console.log('------------');
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}
