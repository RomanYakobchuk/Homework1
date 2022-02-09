//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber(a, b, c) {
    if (a < b && a < c){
        document.write('мінімальне число:',`${a}`);
    }
    else if (b < a && b < c){
        document.write('мінімальне число:',`${b}`);
    }
    else {
        document.write('мінімальне число:',`${c}`);
    }
}
minNumber(234, 657, -86);


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(a, b, c) {
    if (a > b && a > c){
        document.write('максимальне число:',`${a}`);
    }
    else if (b > a && b > c){
        document.write('максимальне число:',`${b}`);
    }
    else {
        document.write('максимальне число:',`${c}`);
    }
}
maxNumber(234, 657, -86);

//- створити функцію яка повертає найбільше число з масиву
let mas = [353, 466, 234, -6575, 24, 32, 100];
function maxNumberOfArr(mas) {
    let max = 0;
    for (let elements of mas) {
        if (elements > max){
            max = elements;
        }
    }
    return max;
}
document.write(`<div>Найбільший елемент масиву: ${maxNumberOfArr(mas)}</div>`);

//- створити функцію яка повертає найменьше число з масиву
let masMin = [33, 0, 111, 575, 2004, 565.2, -100];
function minNumberOfArr(masMin) {
    let min = 0;
    for (let element of masMin) {
        if (element < min){
            min = element;
        }
    }
    return min;
}
document.write(`<div>Найменший елемент масиву: ${minNumberOfArr(masMin)}</div>`);

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let masSum = [453, 543, 96, 5, 2, -546, 0];
function sumElements(masSum){
    let sum = 0;
    for (let masSumElement of masSum) {
        sum += masSumElement;
    }
    return sum;
}
document.write(`<div>Сума елементів масиву: ${sumElements(masSum)}</div>`);

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let masAver = [453, 866, 23, -65, 0, 586];
function average(masAver) {
    let averageNum = 0;
    let averageSum = 0;
    for (let masAverElement of masAver) {
        averageSum += masAverElement;
        averageNum = averageSum / masAver.length;
    }
    return averageNum;
}
document.write(`<div>Середнє арифметичне елементів масиву: ${average(masAver)}</div>`);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function numMinMax(arg) {
    let numberMin = arguments[0];
    let numberMax = arguments[0];
    for (let element of arguments) {
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
document.write('Min:', numMinMax(342, 645645, 8677, 3535, -8));

//- створити функцію яка заповнює масив рандомними числами
function funRandom (length) {
    let arrayrand = [];
    for (let i = 0; i < length; i++){
        arrayrand.push(Math.floor(Math.random()*100));
    }
return arrayrand;
}
document.write(`<div>Рандомний массив: ${funRandom(7)}</div>`);
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function funRandomMas (length, limit) {
    let arrayEmpty = [];
    for (let i = 0; i < length; i++){
        arrayEmpty.push(Math.floor(Math.random()* limit));
    }
    return arrayEmpty;
}
document.write(`<div>Рандомний массив з лімітом: ${funRandomMas(13, 200)}</div>`);

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
