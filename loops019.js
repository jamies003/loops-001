// let groupNumbers = [ [number1, number2, numTotal], [number1, number2, numTotal], [number1, number2, numTotal], [number1, number2, numTotal] ]


let numbersArray = [358276442183, 3554259136937, 372301634211413 ];

for (let i = 1; i < numbersArray.length -1; i++){
    
        let number1 = numbersArray[i];
        let number2 = numbersArray[i + 1];
        let numTotal = number1 + number2;

        let arrayNew = []
        arrayNew.push(number1, number2, numTotal);

        console.log(arrayNew) 

        if ( arrayNew[i] > arrayNew[i + 1]){

        }
    }