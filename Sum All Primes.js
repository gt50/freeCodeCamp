function isPrime(num){
    var maxprime = Math.floor(Math.sqrt(num));
    if (num < 2){
      return false;
    } else if (num === 2){
      return true;
    } else {
      for (var i = 2; i < num; i++){
        if (num % i === 0){
          return false;
        }
      }
      return true;
    }
}

function sumPrimes(num) {
  var sum = 0;
  if (num < 2){
    return 0;
  } else {
    for (var i = 2; i <= num; i++){
      if (isPrime(i)){
        sum = sum + i;
      }
    }
  }
  return sum;
}

console.log(sumPrimes(10));
console.log(isPrime(8));