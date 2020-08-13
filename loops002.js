// Remove item1 from the existing array

let newItem = [['item1', 'item2', 'item3'], ['item0', 'item1', 'item3'],
['item3', 'item2', 'item1']];

for (let i = 0; i < newItem.length; i++) {
  for (let j = 0; j < newItem[i].length; j++) {

    console.log(newItem[i][j]);

    if (newItem[i][j] === 'item1')
    newItem[i].splice(j, 1)
  }
}
console.log(newItem)