function repeat(str, num) {
  // repeat after me
  if (num < 1) {
      return '';
  }
  return str + repeat(str,num -1);
}

console.log(repeat('abc', 3));