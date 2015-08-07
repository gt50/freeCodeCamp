function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var T = [];
  for (var i = 0; i < arr.length; i++){
      T.push({
          name: arr[i].name,
          orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((arr[i].avgAlt + earthRadius),3)/GM))
          });
  }
  return T;
}

console.log(orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]));
console.log()