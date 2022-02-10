//Всі функції повинні бути описані стрілочним типом!!!!
//    - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let numMin = (num1, num2, num3) => {
    let numberMin = 0;
    if (num1 < num2 && num1 < num3){
        numberMin = num1;
    }
    else if (num2 < num1 && num2 < num3){
        numberMin = num2;
    }
    else if (num3 < num1 && num3 < num2){
        numberMin = num3;
    }
    return numberMin;
}
document.write(`<div>Min: ${numMin(342, 645645, 8677)}</div>`);
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
    let numMax = (num1, num2, num3) => {
        let numberMax = 0;
        if (num1 > num2 && num1 > num3){
            numberMax = num1;
        }
        else if (num2 > num1 && num2 > num3){
            numberMax = num2;
        }
        else if (num3 > num1 && num3 > num2){
            numberMax = num3;
        }
    return numberMax;
}
document.write(`<div>Max: ${numMax(342, 645645, 8677)}</div>`);


//- створити функцію яка повертає найбільше число з масиву
let masNumber = [324, 66, 0, -546, 45.8, 433, 1235, -4534];
let maxNumberFunc = (array) => {
    let maxNumber = array[0];
    for (let masNumberElement of array) {
        if(masNumberElement > maxNumber){
            maxNumber = masNumberElement;
        }
    }
    return maxNumber;
}
document.write(`<p>Найбільше число масиву: ${maxNumberFunc(masNumber)}`);


//- створити функцію яка повертає найменьше число з масиву
let masNumber2 = [324, 66, 0, -546, 45.8, 433, 1235, -4534];
let minNumberFunc = (array) => {
    let minNumber = array[0];
    for (let masNumberElement of array) {
        if(masNumberElement < minNumber){
            minNumber = masNumberElement;
        }
    }
    return minNumber;
}
document.write(`<p>Найменше число масиву: ${minNumberFunc(masNumber2)}`);

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let masSum = [453, 543, 96, 5, 2, -546, 0];
let sumElements = (masSum) => {
    let sum = 0;
    for (let masSumElement of masSum) {
        sum += masSumElement;
    }
    return sum;
}
document.write(`<div>Сума елементів масиву: ${sumElements(masSum)}</div>`);

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let masOfAver = [453, 866, 23, -65, 0, 586];
let average = (masOfAver) => {
    let averageSum = 0;
    for (let masAverElement of masOfAver) {
        averageSum += masAverElement;
    }
    return averageSum / masOfAver.length;
}
document.write(`<div>Середнє арифметичне елементів масиву: ${average(masOfAver)}</div>`);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let numOfMinMax = (...arg) => {
    let numberMin = arg[0];
    let numberMax = arg[0];
    for (let element of arg) {
        if (element > numberMax){
            numberMax = element;
        }
        else if (element < numberMin){
            numberMin = element;
        }
    }
    console.log('Max:',numberMax);
    return numberMin;
}
document.write('Min:', numOfMinMax(342, 645645, 8677, 3535, -8));

//- створити функцію яка заповнює масив рандомними числами
let funOfRandom = (length) => {
    let arrayrand = [];
    for (let i = 0; i < length; i++){
        arrayrand.push(Math.floor(Math.random()*100));
    }
    return arrayrand;
}
document.write(`<div>Рандомний массив: ${funOfRandom(7)}</div>`);

//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let funOfRandomMas = (length, limit) => {
    let arrayEmpty = [];
    for (let i = 0; i < length; i++){
        arrayEmpty.push(Math.floor(Math.random()* limit));
    }
    return arrayEmpty;
}
document.write(`<div>Рандомний массив з лімітом: ${funOfRandomMas(13, 200)}</div>`);

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrMas =[1, 2, 3];
let reverse = (arrMas) => {
    let newArr = [];
    for (let i = arrMas.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = arrMas[i];
    }
    return newArr;
}
document.write(`<div>Реверсивний массив: ${reverse(arrMas)}</div>`);





