function where(arr, num) {
  // Find my place in this sorted array.
  for (i=0;i<arr.length;i++){
      if (arr[i] >= num){
          return i;
      }
  }
  return arr.length;
}

console.log(where([40, 60], 50));