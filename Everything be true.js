function every(collection, pre) {
  // Does everyone have one of these?
  for (var i in collection){
      console.log(collection[i].hasOwnProperty(pre));
      if (collection[i].hasOwnProperty(pre) === false){return false;}
  }
  return true;
}

console.log(every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex'));