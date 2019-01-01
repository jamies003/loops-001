// output the number of times that a letter apper in a string 

let string = "abAzlWbB";
let lowerString = string.toLocaleLowerCase().split("").sort();
let count = 1;
let tally = [];


for (let i = 0; i < string.length; i++) {

  if (lowerString[i] !== lowerString[i+1] && lowerString[i] !== lowerString[i-1]) {
    tally.push(lowerString[i], count)
  }

  if (lowerString[i] == lowerString[i+1] || lowerString[i+1] !== lowerString[i+2] ) {
    console.log(lowerString[i], ",", ++count)

    if (lowerString[i+1] !== lowerString[i+2]) {
      tally.push(lowerString[i], count)
    }
  } else {
    count = 1;

  }
  console.log(count)
}