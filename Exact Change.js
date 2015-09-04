function changeCalculate(changeNeeded, denomination){
  var denominationValue = { 'ONE HUNDRED': 100,
                'TWENTY': 20,
                'TEN':10,
                'FIVE':5,
                'ONE':1,
                'QUARTER':.25,
                'DIME':.10,
                'NICKEL':.05,
                'PENNY':.01}
  var value = denominationValue[denomination[0]];
  var denominationInDrawer = denomination[1];
  changeNeeded = changeNeeded.toFixed(2)/1;
  if(value > changeNeeded){return 0;}
  else if (denominationInDrawer < changeNeeded){return denominationInDrawer;}
  else{
    console.log(changeNeeded)
    return Math.floor(changeNeeded/value)*value;
  }
}

function drawer(price, cash, cid) {
  //cid = nestedArrayFix(cid);
  var changeNeeded = cash - price;
  var change = [];
  var totalcid = Math.round(cid.reduce(function(a,b){return ['',a[1] + b[1]];})[1] * 100)/100;
  if (changeNeeded > totalcid){return 'Insufficient Funds';}
  if (changeNeeded === totalcid){return 'Closed';}
  cid = cid.reverse();
  for (var i = 0; i < cid.length; i++){
    var amount = changeCalculate(changeNeeded, cid[i]);
    if (amount > 0){
      change.push([cid[i][0],amount]);
      changeNeeded -= amount;
    }
  }
  return change;
}

//console.log(drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]));
//console.log(drawer(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]));
console.log(drawer(3.26,100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00], [['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15], ['ONE', 1], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04] ]]));
console.log(drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]));