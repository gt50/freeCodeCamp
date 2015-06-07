function findLongestWord(str) {
    var stringArray = str.split(' ');
    var longestString = 0;
   for (i = 0; i < stringArray.length;i++){
       if (stringArray[i].length > longestString){
           longestString = stringArray[i].length;
       }
   }
  return longestString;
}

findLongestWord('The quick brown fox jumped over the lazy dog');