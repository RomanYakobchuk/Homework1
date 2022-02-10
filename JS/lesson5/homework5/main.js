//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangleS = (width, height) => width * height;
document.write(`<div>Площа прямокутника: ${rectangleS(23, 5)}</div>`);
let pi = 3.14;
//- створити функцію яка обчислює та повертає площу кола
let circleS = (radius) => {
    return radius * radius * pi;
}
document.write(`<div>Площа кола: ${circleS(20)}</div>`);

//- створити функцію яка обчислює та повертає площу циліндру
let cylinderS = (radius, height) => {
    return (2 * radius * pi * height) + (2 * Math.pow(radius, 2) * pi);
}
document.write(`<div>Площа циліндра: ${cylinderS(2, 5)}</div>`);

//- створити функцію яка приймає масив та виводить кожен його елемент
let array = [322, 545, 0, -65, 435];
let arrayFunc = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>Елемент масиву: ${array[i]}</div>`);
    }
}
arrayFunc(array);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let txtFunc = (numberOfTxt, text) => {
    for (let i = 0; i < numberOfTxt; i++) {
        document.write(`<p>
                        ${i+1} -
                        ${text}
                    </p>`)
    }
}
txtFunc(5, 'rgrrtegcetgh hvry rvjuvjvr');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let funcUl = (text) => {
    document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
funcUl('svgt vhtrevh ehv')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let funcUlnumLi = (text, numLi) => {
    document.write(`<ul>`);
        for(let i = 0; i < numLi; i++){
            document.write(`<li>${text} - ${i+1}</li>`);
        }
    document.write(`</ul>`);
}
funcUlnumLi('srew trwt yvegc yurjvyhvry vehhc', 6);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let masElement = [322, true, 'Okten', -65, 2022, false, 'Kiev'];
let masElementFunc = (masElement) => {
    for (let i = 0; i < masElement.length; i++) {
        document.write(`<li>${masElement[i]}</li>`);
    }
}
masElementFunc(masElement);


//- створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
let newArray = [
    {
        id: 11,
        name: 'Roman',
        age: 18
    },
    {
        id: 12,
        name: 'Valeriy',
        age: 68
    },
    {
        id: 13,
        name: 'Ivan',
        age: 34
    },
    {
        id: 14,
        name: 'Oleg',
        age: 33
    }
];
let masObjects = (array) => {
    document.write(`<ul>`);
    for (let arrayElement of array) {
        document.write(`<div> id - ${arrayElement.id}; name: ${arrayElement.name} - ${arrayElement.age} y.o.</div>`);
    }
    document.write(`</ul>`);
}
masObjects(newArray);