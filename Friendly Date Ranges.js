var assert = require('assert');
function ordinalDay(mydate){
    var ordinals = ['','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th',
                        '17th','18th','19th','20th','21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
    return ordinals[mydate.getDate()];
}
function getMonth(mydate){
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[mydate.getMonth()];
}
function getYear(mydate){
  return mydate.getFullYear();
}

function friendly(str) {
  var date1 = new Date(str[0]);
  var date2 = new Date(str[1]);
  var diff = date2.getTime() - date1.getTime();
  var dates = [];
  if (+date1 == +date2){
    dates.push(getMonth(date1) + ' ' + ordinalDay(date1) + ', ' + getYear(date1));
  }else if (getYear(date1) === getYear(date2) && getMonth(date1)===getMonth(date2)){
    dates.push(getMonth(date1) + ' ' + ordinalDay(date1));
    dates.push(ordinalDay(date2));
  }else if (diff < 28927800000){ //about 11 months in ms
    dates.push(getMonth(date1) + ' ' + ordinalDay(date1));
    dates.push(getMonth(date2) + ' ' + ordinalDay(date2));
  }else{
    dates.push(getMonth(date1) + ' ' + ordinalDay(date1) + ', ' + getYear(date1));
    dates.push(getMonth(date2) + ' ' + ordinalDay(date2) + ', ' + getYear(date2));    
  }
  return dates;
}

console.log(friendly(['2015-12-01', '2017-02-03']));
console.log(friendly(['2017-01-01', '2017-01-01']));
assert.deepEqual(friendly(['2015-07-01', '2015-07-04']), ['July 1st','4th'], 'ending month should be omitted since it is already mentioned');
 assert.deepEqual(friendly(['2015-12-01', '2016-02-03']), ['December 1st','February 3rd'], 'two months apart can be inferred if it is the next year');
 assert.deepEqual(friendly(['2015-12-01', '2017-02-03']), ['December 1st, 2015','February 3rd, 2017']);
 assert.deepEqual(friendly(['2016-03-01', '2016-05-05']), ['March 1st','May 5th'], 'one month apart can be inferred it is the same year');
 assert.deepEqual(friendly(['2017-01-01', '2017-01-01']), ['January 1st, 2017'], 'since we do not duplicate only return once');
 assert.deepEqual(friendly(['2022-09-05', '2023-09-04']), ['September 5th, 2022','September 4th, 2023']);