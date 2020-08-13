// Creat a varible called sentence log how many times the sentence contains a
//Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad

let sentence = 'Lorem ipsum dolor sit Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Aliqua. Ut enim ad';

let count = '';

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === 'a' || sentence[i] === 'A')
  count++;
}
console.log(count);