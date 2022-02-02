//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//  Вивести кожну змінну за допомогою: console.log , alert, document.write

    let hello = 'hello';
    let owu = 'owu';
    let com = 'com';
    let ua = 'ua';
    let one = 1;
    let ten = 10;
    let num1 = -999;
    let num2 = 123;
    let num3 = 3.14;
    let num4 = 2.7;
    let num5 = 16;
    let numt = true;
    let numf = false;

    console.log(`${hello} ${owu} ${com} ${com} ${ua} ${one} ${ten} ${num1} ${num2} ${num3} ${num4} ${num5} ${numt} ${numf}`);
    //alert(`${hello} ${owu} ${com} ${com} ${ua} ${one} ${ten} ${num1} ${num2} ${num3} ${num4} ${num5} ${numt} ${numf}`);
    document.write(`${hello} ${owu} ${com} ${com} ${ua} ${one} ${ten} ${num1} ${num2} ${num3} ${num4} ${num5} ${numt} ${numf} </br>`);


//- Переприсвоїти кожній змінній з завдання значення на довільне.
//    Вивести кожну змінну за допомогою: console.log , alert, document.write
    hello = 'hi';
    owu = 'qwer';
    com = 'commit';
    ua = 'ukrainian';
    one = 100;
    ten = 10000;
    num1 = 565;
    num2 = -25;
    num3 = 2944.7;
    num4 = -34.6;
    num5 = 1;
    numt = false;
    numf = true;
    console.log(`${hello} ${owu} ${com} ${ua} ${one} ${ten} ${num1} ${num2} ${num3} ${num4} ${num5} ${numt} ${numf}`);
    //alert(`${hello} ${owu} ${com} ${ua} ${one} ${ten} ${num1} ${num2} ${num3} ${num4} ${num5} ${numt} ${numf}`);
    document.write(`${hello} ${owu} ${com} ${ua} ${one} ${ten} ${num1} ${num2} ${num3} ${num4} ${num5} ${numt} ${numf} </br>`);



//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

    let firstName = 'Roman';
    let middleName = 'Valeryevich';
    let lastName = 'Yakobchuk';
    let person = firstName + ' ' + middleName + ' ' + lastName;
    console.log(`${person}`);
    document.write(`${person} </br>`);



//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

    let name = prompt('Enter your name:');
    let surname = prompt('Enter your surname:');
    let age = prompt('Enter your age:');
    document.write(`Вітаю ${name} ${surname}. Тобі ${age} років.</br>`);



//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
   let a1 = 100;
   let b = '100';
   let c = true;
    console.log(typeof a1);
    console.log(typeof b);
    console.log(typeof c);



//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//    В однакових виразах не використовувати однакові оператори!!!
//    5 < 6 -> true
        console.log(5 < 6);
//    5 > 6 -> false
        console.log(5 > 6);
//    5 = 6 -> false
        console.log(5 === 6);
//    5 >= 6 -> false
        console.log(5 >= 6);
//    10 >= 10 -> true
        console.log(10 >= 10);
//    10 === 10 -> true
        console.log(10 === 10);
//    10 < 10 -> false
        console.log(10 < 10);
//    10 > 10 -> false
        console.log(10 > 10);
//    10 !== 10 -> false
        console.log(10 !== 10);
//    123 === '123' -> false
        console.log(123 === '123');
//    123 !== '123' -> true
        console.log(123 !== '123');

//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
    let a = 5;
    document.write(str + a + "<br/>");
    // виведе 205, тому що з оператором + str перетворює всі наступні змінні на стрінгові і виводить як дві змінні з'єднанні між собою
    document.write(str - a + "<br/>");
    // виведе 15 тому що при відніманні змінні перетворюються в числа
    document.write(str * "2" + "<br/>");
    // виведе 40 тому що при множенні змінні перетворюються в числа
    document.write(str / 2 + "<br/>");
    // // виведе 10 тому що при діленні змінні перетворюються в числа


