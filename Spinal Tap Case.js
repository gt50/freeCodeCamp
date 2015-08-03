function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/[\s_]/g,'-');
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('thisIsSpinalTap'));