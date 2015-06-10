function chunk(arr, size) {
  // Break it up.
  var i = 0;
  var chunks = [];
  for (i = 0; i < arr.length; i = i + size){
      chunks.push(arr.slice(i,i+size));
  }
  return chunks;
}

console.log(chunk(['a', 'b', 'c', 'd', 'e'], 2));
