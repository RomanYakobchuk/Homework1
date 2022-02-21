//Візьміть файл template1.html, під'єднайте до нього скрипт, і працюйте в ньому!
//
//    - Напишіть код,  котрий :
//-- отримує текст з параграфа з id "content"
let contentById = document.getElementById('content');
console.log(contentById);

//-- отримує текст з блоку з id "rules"
let rulesById = document.getElementById('rules');
console.log(rulesById);

//-- замініть текст параграфа з id 'content' на будь-який інший
contentById.innerHTML = '<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quaerat.</h1>'

//-- замініть текст параграфа з id 'rules' на будь-який інший
rulesById.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt iusto, veritatis! Autem consequuntur eaque enim, fugiat neque quisquam soluta voluptates.</p>'

//-- змініть кожному елементу колір фону на червоний
//-- змініть кожному елементу колір тексту на синій
let elementBody = document.body.children;
for (const elementBodyElement of elementBody) {
    elementBodyElement.style.background = 'red';
    elementBodyElement.style.color = 'darkblue';
}


//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rules = document.getElementById('rules').innerText;
console.log(rules);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcrulesRed = document.getElementsByClassName('fc_rules');
for (const fcrulesRedElement of fcrulesRed) {
    fcrulesRedElement.style.color='red';
}