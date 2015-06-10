function isFalsey(value){
    if (value === false || value === null || value === 0 || value === '' || value === NaN){
        return false;
    } else {
        return true;
    }
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(isFalsey);
}

console.log(bouncer([7, 'ate', '', false, 9]));