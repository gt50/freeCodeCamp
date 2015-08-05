function drop(arr, func) {
  // Drop them elements.
  var arr2 = arr.slice();
  for (var i in arr){
      if (func(arr[i])){ return arr2;}
      else {arr2.shift();}
  }
  return arr2;
}

console.log(drop([1, 2, 3, 4], function(n) {return n >= 3; }));