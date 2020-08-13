// add the sum of all the even numbers in the array

let array = [1, 3, 6, 11, 3, 10, 4, 12, 15, 17, 13, 21, 44];
let total= 0;

for (let i = 0; i < array.length; i++) {

  if (array[i] % 2 !== 0 ) {
    
    console.log(array[i])
    total += array[i];
  }

}
console.log(total)