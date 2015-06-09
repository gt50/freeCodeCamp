function largestOfFour(arr) {
  // You can do this!
  var largest = [];
  var i = 0;
  for (i=0;i<arr.length;i++){
      largest.push(arr[i].sort(function(a,b){return b-a})[0]);
  }
  return largest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));