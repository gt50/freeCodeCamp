function add() {
    if (typeof(arguments[0]) !== "number"){return undefined;}
    else if (arguments[1] !== undefined && typeof(arguments[1]) !== "number"){return undefined;}
    if (arguments[1] === undefined){
        var arg0 = arguments[0];
        return function(){
            if (typeof(arguments[0]) !== "number"){return undefined;}
            return arg0 + arguments[0];
        };
    } else {
        return arguments[0] + arguments[1];
    }
}

console.log(add(2)([3]));
