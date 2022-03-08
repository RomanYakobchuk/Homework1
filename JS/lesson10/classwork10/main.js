// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let blockOne = document.createElement('div');
blockOne.innerText = 'Form - 1';
blockOne.style.margin = '10px 20px';
blockOne.style.border = '1px solid black';
blockOne.style.width = '400px';
blockOne.style.padding = '10px';
document.body.append(blockOne);

let blockTwo = document.createElement('div');
blockTwo.innerText = 'Form - 2';
blockTwo.style.margin = '10px 20px';
blockTwo.style.border = '1px solid black';
blockTwo.style.width = '400px';
blockTwo.style.padding = '10px';
document.body.append(blockTwo);

let formOne = document.createElement('form');
formOne.setAttribute('name', 'formOne');
blockOne.append(formOne);

let formTwo = document.createElement('form');
formTwo.setAttribute('name', 'formTwo');
blockTwo.append(formTwo);

let inputeOne = document.createElement('input');
inputeOne.setAttribute('name', 'inputeOne');
inputeOne.style.margin = '10px';

let inputeTwo = document.createElement('input');
inputeTwo.setAttribute('name', 'inputeTwo');
inputeTwo.style.margin = '10px';

let inputeThree = document.createElement('input');
inputeThree.setAttribute('name', 'inputeThree');
inputeThree.style.margin = '10px';

let inputeFour = document.createElement('input');
inputeFour.setAttribute('name', 'inputeFour');
inputeFour.style.margin = '10px';

let button = document.createElement('button');
button.innerText = 'Вивести в консоль!!!';

document.body.append(button);

formOne.append(inputeOne,inputeTwo);
formTwo.append(inputeThree,inputeFour);

button.addEventListener('click', function (){
    console.log(document.forms.formOne.inputeOne.value);
    console.log(document.forms.formOne.inputeTwo.value);
    console.log(document.forms.formTwo.inputeThree.value);
    console.log(document.forms.formTwo.inputeFour.value);
})

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let oneInput = document.createElement('input');
let twoInput = document.createElement('input');
let threeInput = document.createElement('input');

let button2 = document.createElement('button');
button2.innerText = 'Створити таблицю!';

let task2 = document.createElement('div');
task2.style.margin = '30px';
task2.append(oneInput, twoInput, threeInput, button2);

document.body.append(task2);

button2.addEventListener("click", function () {
    let tr = oneInput.value;
    let td = twoInput.value;

    let text = threeInput.value;

    function tableGeneration(tr, td, text) {
        let divTable = document.createElement('div');
        let table = document.createElement('table');
        divTable.append(table);
        document.body.append(divTable);

        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            tr.style.border = '1px solid black';
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.style.border = '1px solid black';
                td.style.padding = '5px 10px';
                td.innerText = `${text}`;
                tr.append(td);
                table.append(tr);
            }
        }
    }
    tableGeneration(tr, td, text);
});

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let words = ['паскуда', 'зараза', 'телепень', 'дурень'];

let inputTask3 = document.createElement('input');
let button3 = document.createElement('button');
button3.innerText = 'Перевірити';
let divTask3 = document.createElement('div');
divTask3.style.margin = '20px';
divTask3.append(inputTask3, button3)
document.body.append(divTask3);

button3.addEventListener("click", function () {
    let valueInput = inputTask3.value;
    let valueInputvalue = valueInput.split(' ');
    for (let word of words) {
        if(word === valueInputvalue){
            alert('І не соромно??? 0_o');
            inputTask3.value = '';
            return;
        }
    }
    if(valueInput) {
        alert('Молодець!');
        inputTask3.value = '';
    }
});


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let wordsTwo = ['паскуда', 'зараза', 'телепень', 'дурень'];

let inputTask4 = document.createElement('input');
let button4 = document.createElement('button');
button4.innerText = 'Перевірити';
let divTask4 = document.createElement('div');
divTask4.style.margin = '20px';
divTask4.append(inputTask4, button4)
document.body.append(divTask4);

button4.addEventListener("click", function () {
    let valueInput = inputTask4.value;
    let inputValueTask4 = valueInput.split(' ');
    console.log(inputValueTask4);
    for (let word of wordsTwo) {
        for (let string of inputValueTask4) {
            if(word === string){
                alert('І не соромно??? 0_o');
                inputTask4.value = '';
                return;
            }
        }
    }
    if(valueInput) {
        alert('Молодець!');
        inputTask4.value = '';
    }
});
