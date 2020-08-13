// find the average score from the array

let examSores = [98, 77, 84, 78, 58, 96];

let total = 0;

for (let i = 0; i < examSores.length; i++) {
  total += examSores[i];
  console.log(total)

}
let average = total / examSores.length;
average = Math.round(average);
console.log(average);