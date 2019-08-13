// function isPrime(input) {
//   let prime = true;
//   for (let i = 2; i <= Math.sqrt(input); i++) {
//       if (input % i == 0) {
//           prime = false;
//           break;
//       }
//   }
//   return prime && (input > 1);
// }

// console.log(isPrime(23));

function printPrime(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    if (isPrime(i)) {
      console.log(i)
    } else {
      console.log('none')
    }
  }

}

function isPrime(input) {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      prime = false;
      break;
    }
  }

  return prime && (input > 1);
}

printPrime(13, 17)