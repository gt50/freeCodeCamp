var assert = require('assert');
var expect = require('expect');

function inventory(arr1, arr2) {
    arr2.forEach(function(e){
        var found = 0;
        arr1.forEach(function(el){
            if (e[1] === el[1]){
                el[0] += e[0];
                found = 1;
            }
        });
        if (!found){
            arr1.push(e);
        }
    });
    arr1.sort(function(a,b){return (a[1] < b[1] ?  -1 :  1);});
    console.log(arr1);
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

assert.deepEqual(inventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], 
                            [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']])
, [[88, 'Bowling Ball'], [2, 'Dirty Sock'], [3, 'Hair Pin'], [3, 'Half-Eaten Apple'], [5, 'Microphone'], [7, 'Toothpaste']]);