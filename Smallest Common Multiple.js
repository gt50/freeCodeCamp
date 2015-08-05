function range(arr){
  arr.sort();
  var begin = arr[0];
  var end = arr[1];
  var myRange = [];
  for (var i = begin; i <= end; i++){ myRange.push(i);}
  return myRange;
}

function smallestCommons(arr) {
  arr = range(arr);
  var maxProduct = arr.reduce(function(a,b){return a*b;});
  var maxArr = Math.max.apply(null,arr);
  for (var i = maxArr; i <= maxProduct; i++){
      for (var j = 0; j < arr.length; j++){
        if (i % arr[j] !== 0){ break;}
        if (j === arr.length - 1){ return i;}
      }
  }
  return "something went wrong";
}


console.log(smallestCommons([1,13]));