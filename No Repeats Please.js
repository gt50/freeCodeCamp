function hasRepeat(str){
    for (var i = 0; i < str.length - 1; i++){
        if (str.charAt(i) === str.charAt(i+1)){
            return true;
        }
    }
    return false;
}

function getPermutations(prefix, str, myPermutations){
    if (str === ''){
        if (!hasRepeat(prefix)) {
            myPermutations.push(prefix);
        }
        return prefix;
    }
    for (var i = 0; i < str.length; i++){
       getPermutations(prefix + str.charAt(i), str.substring(0, i) + str.substring(i + 1), myPermutations);
    }
}

function permAlone(str) {
    var myPermutations = [];
    getPermutations('',str, myPermutations);
    return myPermutations.length;
}

console.log(permAlone('aab'));