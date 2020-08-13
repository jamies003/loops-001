function sumZero (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// sumZero ([-3, -2, -1,0,1,2,3]) // [-3, 3]
sumZero ([-4, -3, -2, -1, 0,1,2,5]) // [-3, 3]
