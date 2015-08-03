function getOddFibSequence(max){
    var sequence = [1,1];
    var oddsequence = [1,1];
    if (max < 1){
        sequence = [];
    } else {
        var next = sequence[sequence.length-1] + sequence[sequence.length - 2];
        while (next <= max){
            sequence.push(next);
            if (next % 2 == 1){
                oddsequence.push(next);
            }
            next = sequence[sequence.length-1] + sequence[sequence.length - 2];
        }
    }
    return oddsequence;
    
}

function sumFibs(num) {
  return getOddFibSequence(num).reduce(function(a,b){return a+b;});
}

console.log(sumFibs(4));
console.log(getOddFibSequence(100));