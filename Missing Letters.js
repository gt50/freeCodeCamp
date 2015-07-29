function fearNotLetter(str) {
    var input = str.split('');
    str = undefined;
    for (var i in input){
        if (i > 0 && input[i] != String.fromCharCode(input[i-1].charCodeAt(0)+1)){
            str = String.fromCharCode(input[i-1].charCodeAt(0)+1);
        }
    }
  return str;
}

console.log(fearNotLetter('abce'));