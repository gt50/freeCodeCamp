function sumAll(arr) {
    var total = 0;
    arr.sort(function(a,b){return a-b});
    for (i=arr[0];i<arr[1]+1;i++){
        total += i;
    }
    return total;
}

console.log(sumAll([5, 10]));