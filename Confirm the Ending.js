function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return (target == str.substr(-1 * target.length));
}

console.log(end('Bastian', 'n'));