function pairwise(arr, arg) {
    var indices = [];
    for (var i = 0; i < arr.length; i++){
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === arg){
                if (indices.indexOf(i) < 0 && indices.indexOf(j) < 0){ 
                    indices.push(i);
                    indices.push(j);
                }
            }
        }
    }
    console.log(indices);
    if (indices.length === 0){
        return 0;
    }else {
        return indices.reduce(function(a,b){return a+b;});
    }
}

console.log(pairwise([1,4,2,3,0,5], 7));
console.log(pairwise([1,1,1], 2));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
console.log(pairwise([], 100));