function where(collection, source) {
  var arr = [];
  // What's in a name?
  //return Object.keys(source)[0];
  var key = Object.keys(source)[0];
  for (i=0; i < collection.length; i++) {
    if (collection[i][key] == source[key]){
      arr.push(collection[i]);
    }
  }
  return arr;
}

console.log(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }));
