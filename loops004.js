// Replace all odd numbers with the word Odd and even with the word even

let arr = [[52, 23, 66, 38, 13, 21],
[17, 11, 32, 45, 22, 84, 33],
[16, 23, 33, 18, 14],
[6, 3, 24, 66, 15, 21]];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {

    if (arr[i][j] % 2 === 0) {
      arr[i][j] = 'even';

    }else
    arr[i][j] = 'odd'
  }
}
console.log(arr);