function find(arr, func) {
  for (var i in arr){
      if (func(arr[i])){
          return arr[i];
      }
  }
  return undefined;
}

console.log(find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));