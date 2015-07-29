function pair(str) {
  var pairs = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};
  var input = str.split('');
  var result = [];
  for (var i in input){
      result.push([input[i],pairs[input[i]]]);
  }
  return result;
}

console.log(pair("GCG"));