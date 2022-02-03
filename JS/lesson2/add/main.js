//- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому 3 і більше елементи.
//    Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    console.log('Це великий масив, в якому 3 і більше елементи!');
} else if (friends.length < 3) {
    console.log('Це маленький масив, в якому менше 3-х елементів!');
} else {
    console.log('Error!!!')
}


//- Маємо 3 числа і між ним нам потрібно знайти те що посередині.
//    Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let number1 = +prompt('Введіть перше число:');
let number2 = +prompt('Введіть друге число:');
let number3 = +prompt('Введіть третє число:');
if ((number1 > number2 && number1 < number3) || (number1 < number2 && number1 > number3)) {
    console.log('Середнім є перше число ---', number1);
} else if ((number2 > number1 && number2 < number3) || (number2 < number1 && number2 > number3)) {
    console.log('Середнім є друге число ---', number2);
} else if ((number3 > number1 && number3 < number2) || (number3 < number1 && number3 > number2)) {
    console.log('Середнім є третє число ---', number3);
} else {
    console.log('Error!!!');
}

//- Перепишіть конструкцію if з використанням умовного оператора '?':
let a = 1;
let b = 2;
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}
(a + b < 4) ? result = 'Мало' : result = 'Багато';


//- Маємо будь яке число від -100, 0, +100 потрібно перевірити яким є число: позитивним, негативним або нулем
//напишіть це тернарним оператором
let numbers = +prompt('введіть число');
(numbers < 0 && numbers > -100) ? console.log('число негативне') : (numbers === 0) ? console.log('число нуль') : (numbers > 0 && numbers <100) ? console.log('число позитивне') : console.log('Помилка');