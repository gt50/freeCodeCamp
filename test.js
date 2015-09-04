function fib(number){
  return (number === 1) ? 1: number * fib(number -1); 
}

function permutations(prefix, mystring){
  if (mystring === ''){
    myPermutations.push(prefix);
    console.log(myPermutations);
    return prefix;
  } else {
    for (var i = 0; i < mystring.length; i++){
        permutations(prefix + mystring.charAt(i), mystring.substring(0, i) + mystring.substring(i + 1));
    }
  }
  return myPermutations;
}

var myPermutations = []; 
console.log(fib(5));

console.log(permutations('','abc'));