let arr = [31, 27, 13, 7, 41, 25];
let min = Infinity
let secondMin = Infinity; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        secondMin = min;
        min = arr[i]; 
    } else if (arr[i]< secondMin) {
        secondMin = arr[i]; 
    }
}

// console.log('Smallest number: ' + min);
console.log('Second smallest number: ' + secondMin);