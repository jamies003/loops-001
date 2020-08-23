// let groupNumbers = [ [number1, number2, numTotal], [number1, number2, numTotal], [number1, number2, numTotal], [number1, number2, numTotal] ]


let numbersArray = [358276442183, 355932218848, 3554259136937, 5602212994565, 353022164588, 639921161300, 56022354427689,51087587653044, 6333641549180, 560224431936850, 5020192861974, 676324012630737, 3530627464605, 63043786670877, 372301634211413 ];

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