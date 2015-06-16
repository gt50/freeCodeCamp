function isArgument(value){
    return function(element){
        return element !== value;
    }
}

function destroyer(arr) {
  // Remove all the values
  var filtered = arguments[0];
  for (i=1;i<arguments.length;i++){
      filtered = filtered.filter(isArgument(arguments[i]))
  }
  return filtered;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));