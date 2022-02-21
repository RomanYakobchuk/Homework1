//Взяти файл template_2.html та працювати в ньому
//  1) Напишіть код, який :
//      a) додає клас з назвою групи, елементу з ід main_header
document.getElementById('main_header').classList.add('group');

//      b) робить шириниу елементу ul 400px
let widthUl = document.getElementsByTagName('ul');
widthUl[0].style.width = '400px';


//      c) робить шириниу всіх елементів з класом linkList шириною 50%
let widthLinkList = document.getElementsByClassName('linkList');
for (const widthLinkListElement of widthLinkList) {
    widthLinkListElement.style.width = '50%';
}

//      d) отримує текст який зберігається в елементі з класом listElement2
let txtLE2 = document.getElementsByClassName('listElement2');
txtLE2[0].innerHTML = '<a href="#">New Text</a>';

//      e) отримує всі елементи li та змінює ім колір фону на сірий
let elemLi = document.getElementsByTagName('li');
for (const elemLiElement of elemLi) {
    elemLiElement.style.background = 'silver';
    elemLiElement.style.border = '1px solid black';
    elemLiElement.style.margin = '3px';
}

//      f) отримує всі елементи 'a' та додає їм клас anchor
let elemA = document.getElementsByTagName('a');
for (const elemAElement of elemA) {
    elemAElement.classList.add('anchor');
}

//      g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let elementA = document.getElementsByTagName('a');
for (const elementAElement of elementA) {
    if(elementAElement.innerText === 'link3'){
        elementAElement.style.fontSize = '40px';
    }
}

//      h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let allA = document.getElementsByTagName('a');
// for (const allAElement of allA) {
//     allAElement.classList.add(`element_${allAElement.innerText}`);
// }

//      i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subheader = document.getElementsByClassName('sub-header');
for (const subheaderElement of subheader) {
    subheaderElement.style.color = prompt('Enter your color: red, green. blue...');
}
//      j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let subheader2 = document.getElementsByClassName('sub-header');
for (const subheader2Element of subheader2) {
    if (subheader2Element.innerText === 'content 2 segment'){
        subheader2Element.style.color = prompt('Enter your color: red, green. blue...');
    }
}

//      k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1');
content1[0].innerText = prompt('Enter your text:')
//      l) отримати елементи p та змінити їм padding на 20px
let elemP = document.getElementsByTagName('p');
for (const elemPElement of elemP) {
    elemPElement.style.padding = '20px';
}

//      m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (const text2Element of text2) {
    text2Element.innerText = 'dec-2021';
}

