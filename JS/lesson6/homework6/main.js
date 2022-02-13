//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let hw = 'hello world';
let li = 'lorem ipsum';
let jic = 'javascript is cool';
console.log(hw.length);
console.log(li.length);
console.log(jic.length);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
console.log(hw.toUpperCase());
console.log(li.toUpperCase());
console.log(jic.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let hw2 = 'HELLO WORLD';
let li2 = 'LOREM IPSUM';
let jic2 = 'JAVASCRIPT IS COOL';
console.log(hw2.toLowerCase());
console.log(li2.toLowerCase());
console.log(jic2.toLowerCase());


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Каждый охотник желает знать';
let stringToarray = (str2) => str2.split(' ');
console.log(stringToarray(str2));
document.write(stringToarray(str2)); // ['Каждый', 'охотник', 'желает', 'знать']

//
//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//    let str = 'Каждый охотник желает знать';
//document.writeln(delete_characters(str, 7)); // Каждый
let strchar = 'Каждый охотник желает знать';
let delete_characters = (str, length) => {
    return strchar.substr(0, 6);
}
document.write(`<div>${delete_characters(strchar)}</div>`);


//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let strHJP = "HTML JavaScript PHP";
let insert_dash = (strHJP) => {
    return strHJP.split(' ').join('-').toUpperCase();
}
document.write(`<div>${insert_dash(strHJP)}</div>`);


//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let indexUp = (txt) => {
    if(!txt) return txt;
    return txt[0].toUpperCase() + txt.slice(1);
}
document.write(`<div>${indexUp('hello world!')}</div>`);

//
//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let txtUp = (txt) => {
    return txt.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
document.write(`<div>${txtUp('hello world and Kiev')}</div>`);