//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
    console.log(arr);
    function arrResult(array) {
        let result = 0;
        for (let i = 0;  i < array.length; i++)
        {
            result += array[i];
        }
        console.log(result);
    }
    arrResult(arr);


//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
    let book1 =
        {
            title: 'Harry Potter',
            pages: '250',
            genre: 'fantasy',
        };
    console.log(book1);



//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 =
    {
        title: 'Harry Potter',
        pages: '250',
        genre: 'fantasy',
        author: `Joanne Rowling`,
    };
console.log(book2);



//4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let book3 = [
    {
        title: 'Harry Potter',
        pages: '250',
        genre: 'fantasy',
        author: `Joanne Rowling`,
    },
    {
        title: 'Charlie and the chocolate factory',
        pages: '240',
        genre: 'fantasy',
        author: `Roald Dahl`,
    },
];
for (const book of book3) {
    document.write(
        `<div>
                ____________________________ </br>
                |${book.title} </br>
                |${book.pages} </br>
                |${book.genre} </br>
                |${book.author} </br>
                ____________________________
            </div>`)
}




//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let S = height * width;
document.write('Площа прямокутника:',  `${S}`, '(cм.кв.) </br>');



//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let PI = 3.14;
let rC = dC / 2;
let V = PI * rC * rC * heightC;
document.write('Обєм циліндра:', `${V}`, '(м.куб.) </br>');



//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(n**2 + m**2);
console.log('Гіпотенуза дорівнює:',  k);
document.write('Гіпотенуза дорівнює:', `${k}`)


