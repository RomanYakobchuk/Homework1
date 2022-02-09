
//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function content() {
    let argCont = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments.length === 1){
            argCont = arguments[i];
        }
        else if (arguments.length === 2){
            argCont += arguments[i];
        }
        else {
            argCont = 'Щось не так';
        }
    }
    return argCont;
}
document.write(`<div>Просто виведення - ${content('8798')}</div>`);
document.write(`<div>Обєднання для string - ${content('8798', '987')}</div>`);
document.write(`<div>Сума для number: ${content(34, 67)}</div>`);
document.write(`<div>Помилка для кількості аргументів більше 2: ${content(34, 67, 546)}</div>`);


//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//    EXAMPLE:
//[1,2,3,4]
//[2,3,4,5]
//результат
//[3,5,7,9]
let array1 = [453, 4564, 45, -65, 5656];
let array2 = [65, 1, 0, 945, -6756];
sumArr(array1, array2);
function sumArr(arr1, arr2){
    let arrSum = [];
    for (let i = 0; i < array1.length, i < array2.length; i++) {
        arrSum.push(array1[i] + array2[i]);
        document.write(`${[i+1]} - (${arrSum[i]});`);
    }
    return arrSum;
}


//- Створити функцію яка приймає масив будь-яких об'єктів, та повертає масив ключів всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let masObjects = [
    {
        name: 'Dima',
        age: 13
    },
    {
        model: 'Camry'
    },
    {
        model: 'Camry'
    }
];
function masKey(arr) {
    let mascount = [];
    for (let arrElement of arr) {
        for (let mascountKey in arrElement) {
            mascount.push(mascountKey);
        }
    }
    return mascount;
}
document.write(`<div>Масив обєктів: ${masKey(masObjects)}</div>`)
//    - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function masKeyTwo(arr) {
    let mascountTwo = [];
    for (let arrElement of arr) {
        for (let mascountKey in arrElement) {
            mascountTwo.push(arrElement[mascountKey]);
        }
    }
    return mascountTwo;
}
document.write(`<div>Масив значень: ${masKeyTwo(masObjects)}</div>`)
