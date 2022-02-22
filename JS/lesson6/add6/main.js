//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let tempArray = [];
    for (let i = 0; i < str.length; i+=n) {
        tempArray.push(str.slice(i, i+n));
    }
    return tempArray;
}
document.write(`<div>${cutString('наслаждение', 3)}</div>`);
document.write(`<div>${cutString('Hello word!', 4)}</div>`);
document.write(`<div>${cutString('qewrt-rgtgc_ewgt454', 2)}</div>`);


//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не менше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//Протестувати на значеннях
//someemail@gmail.com
//someeMAIL@gmail.com
//someeMAIL@i.ua
//some.email@gmail.com
//
//Примітка
//Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
let pochta = (str) => {
    let lowerStr = str.toLowerCase();
    let index = lowerStr.indexOf('.') - lowerStr.indexOf('@');
    if(lowerStr.includes('@') && !lowerStr.startsWith('@') && index > 2){
        console.log('Okay!!!')
    }
    else{
        console.log('Error 0_o!!!');
    }
}
pochta('someemail@gmail.com');
pochta('someeMAIL@gmail.com');
pochta('someeMAIL@i.ua');
pochta('some.email@gmail.com');


//- є масив
 let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
//відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sortArray = coursesArray.sort((a, b) => a.modules.length - b.modules.length);
console.log(sortArray);


//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//    let symb = "о", str = "Астрономия это наука о небесных объектах";
//document.writeln(count(str, symb)) // 5
let symb = 'о';
let str = "Астрономия это наука о небесных объектах";
let count = (str, stringsearch) => {
    let search;
    let index = str.indexOf(stringsearch);
    if (str[index] === stringsearch){
        search = str.indexOf(stringsearch) + 1;
    }
    return search;
}
document.write(`<div>Кількість символів ' ${symb} ' - ${count(str, symb)}</div>`);


//
//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let str2 = "Сила тяжести приложена к центру масс тела";
let cutString2 = (str, n) => {
    let newStr;
    let arr = str.split(' ');
    newStr = arr.slice(0, n).join(' ');
    return newStr;
}
document.write(`<div>Новий рядок: ${cutString2(str2, 5)}</div>`);


