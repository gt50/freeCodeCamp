function steamroller(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(a,b){return a.concat(Array.isArray(b) ? steamroller(b) : b);},[]);
}

console.log(steamroller([1, [2], [3, [[4]]]]));