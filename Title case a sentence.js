function titleCase(str) {
    var previousLetter = '';
    var i = 0;
    str = str.split('');
    for (i = 0; i < str.length;i++){
        if (previousLetter == ' ' || i == 0){
            str[i] = str[i].toUpperCase();
        } else {
            str[i] = str[i].toLowerCase();
        }
        previousLetter = str[i];
    }
  return str.join('');
}

console.log(titleCase("I'm a little tea pot"));
