Array.prototype.diff = function(a){
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

function difference(a,b){
    var tempa = a.diff(b);
    var tempb = b.diff(a);
    return tempa.concat(tempb);
}

function sym(args) {
    for(var i = 0; i < arguments.length -1; i++){
        var temp = difference(arguments[i], arguments[i+1]);
        temp = temp.filter(function(v,i,a){return a.indexOf(v) == i;});
        arguments[i+1] = temp;
        console.log(temp);

    }
    
  return arguments[arguments.length-1].filter(function(v,i,a){return a.indexOf(v) === i;});
}

//console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//console.log(sym([1, 2, 5], [2, 3, 5, 7], [3, 4, 5]));
//console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(sym([1, 1]));
//console.log(difference([1,2,3,4,5,6],[3,4,5,7]));