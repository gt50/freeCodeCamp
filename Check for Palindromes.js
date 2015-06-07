function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/\W/g,'');
  return str == str.split('').reverse().join('');
}



console.log(palindrome("A man, a plan, a canal. Panama"));
