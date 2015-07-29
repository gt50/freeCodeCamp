function translate(str) {
    if(['a','e','i','o','u'].indexOf(str[0]) > -1){
        return str + 'way';
    } else if(['gl'].indexOf(str.slice(0,2)) > -1){
        return str.slice(2) + str.slice(0,2) + 'ay';
    } else{
        return str.slice(1) + str[0] + 'ay';
    }
}

console.log(translate("glove"));