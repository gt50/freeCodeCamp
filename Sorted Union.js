function unite(arr1, arr2, arr3) {
    var arr4 = arr1.concat(arr2).concat(arr3);
    var answer = [];
    for (var number in arr4){
        if (answer.indexOf(arr4[number]) < 0) answer.push(arr4[number]);
    }
  return answer;
}

console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1]));