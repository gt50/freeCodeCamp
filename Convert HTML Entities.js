function convert(str) {
  // &colon;&rpar;
  var htmlentities = {'&':'&amp;', '<':'&lt;','>':'&gt;', '"':'&quot;', "'":'&apos;'};
  for (var character in htmlentities){
      console.log((character));
      str = str.split(character).join(htmlentities[character]);
  }
  return str;
}

console.log(convert('Hamburgers < Pizza < Tacos'));