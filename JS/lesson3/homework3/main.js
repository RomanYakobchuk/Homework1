//--створити масив з:
//    - з 5 числових значень
//    - з 5 стрічкових значень
//    - з 5 значень стрічкового, числового та булевого типу
//    - та вивести його в консоль
let arrInt = [5, 6, 56, 345, -54];
let arrStr = ['Kiev', 'Lviv', 'Khmelnytskyi', 'Chernihiv', 'Odessa'];
let arrAll = [4, 'Kiev', true, 'Okten', 2022];
console.log(arrInt);
console.log(arrStr);
console.log(arrAll);




//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = '0_o';
array[1] = 2022;
array[2] = true;
array[3] = '<3';
array[4] = '/(*_*)/';
array[5] = 988;
console.log(array);



//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for(let i = 0; i < 10; i++){
    document.write(`<div>text - ${i+1}</div>`);
}
for(let i = 0; i < 10; i++){
    document.write(`<div>txt lorem ipsun in - ${i+1}</div>`);
}
let i = 0;
while (i < 20){
    document.write(`<h1>snflvnsovnkjvn erevrtv bryberybe - ${i+1}</h1>`)
    i++;
}
let y = 0;
while (y < 20){
    document.write(`<h1>${y+1} - snflvnsovnkjvn erevrtv bryberybe</h1>`)
    y++;
}





//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let numArray = [23, 544, 0, -45, 6.3, 1000, 55, 6843, 6, 233];
for(let i = 0; i < numArray.length; i++){
    console.log(numArray[i]);
}
//=============
let strArray = ['one', 'two', 'tree', 'qwerty', 'Okten', 'ASUS', 'Apple', 'Google', 'Name', 'Kiev'];
for(let i = 0; i < strArray.length; i++){
    console.log(strArray[i]);
}
//=============
let allArray = ['one', 2, true, 'qwerty', 'Okten', 34545345, 'Apple', 'Google', false, 'Kiev'];
for(let i = 0; i < allArray.length; i++){
    console.log(allArray[i]);
}
//=============
let allTwoArray = ['one', 2, true, 'qwerty', 'Okten', 34545345, 'Apple', 'Google', false, 'Kiev'];
for(let i = 0; i < allTwoArray.length; i++){
    if(typeof allTwoArray[i] === 'boolean'){
        console.log('boolean - ', allTwoArray[i]);
    }
}
//=============
let allNumArray = ['one', 2, true, 'qwerty', 'Okten', 34545345, 'Apple', 'Google', false, 'Kiev'];
for(let i = 0; i < allNumArray.length; i++){
    if(typeof allNumArray[i] === 'number'){
        console.log('number - ', allNumArray[i]);
    }
}
//=============
let allStrArray = ['one', 2, true, 'qwerty', 'Okten', 34545345, 'Apple', 'Google', false, 'Kiev'];
for(let i = 0; i < allStrArray.length; i++){
    if(typeof allStrArray[i] === 'string'){
        console.log('string - ', allStrArray[i]);
    }
}
//=============




//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let ArrayArr = [];
ArrayArr[0] = true;
ArrayArr[1] = 4554;
ArrayArr[2] = 19;
ArrayArr[3] = 'Yeees!!!';
ArrayArr[4] = false;
ArrayArr[5] = 'QWERTY';
ArrayArr[6] = 'OKTEN';
ArrayArr[7] = 2022;
ArrayArr[8] = 1991;
ArrayArr[9] = 'KIEV';
for(let i = 0; i < ArrayArr.length; i++){
    console.log(ArrayArr[i]);
}
//====================================
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i < 10; i++){
    console.log('крок циклу:  '+ i +' ; ');
    document.write('крок циклу: '+ i +'; ');
}
//====================================
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i < 100; i++){
    console.log('крок циклу:  '+ i +' ; ');
    document.write('крок циклу: '+ i +'; ');
}
//====================================


//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i < 100; i+=2){
    console.log('крок циклу:  '+ i +' ; ');
    document.write('крок циклу: '+ i +'; ');
}
//====================================

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let i = 0; i < 100; i++){
   if(i % 2 === 0){
       console.log('крок циклу:  '+ i +' ; ');
       document.write('крок циклу: '+ i +'; ');
   }
}
//====================================



//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i = 0; i < 100; i++){
    if(i % 2 === 1){
        console.log('крок циклу:  '+ i +' ; ');
        document.write('крок циклу: '+ i +'; ');
    }
}
//====================================

