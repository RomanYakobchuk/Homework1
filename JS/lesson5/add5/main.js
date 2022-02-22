// - Дано натуральное число n. Выведите все числа от 1 до n.
let funcNumberN = (n) => {
    let arrNumN = [];
    for (let i = 1; i <= n; i++) {
        arrNumN.push(i);
    }
    return arrNumN;
}
document.write(`<div>Числа від 1 до n: ${funcNumberN(10)}</div>`);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let funcNumAB = (A, B) => {
    let arrNumAB = []
    if(A < B){
        for (let i = A; i <= B; i++) {
            arrNumAB.push(i);
        }
    }
    else if(A > B){
        for (let i = A; i >= B; i--) {
            arrNumAB.push(i);
        }
    }
    else{
        document.write('Error!!!');
    }
    return arrNumAB
}
document.write(`<div>Числа від А до В: ${funcNumAB(10, 20)}</div>`);
document.write(`<div>Числа від А до В: ${funcNumAB(10, 5)}</div>`);


//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let changePlaces = (arr, i) => {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        return arr;
}
document.write(`<div>Новий масив: ${changePlaces([2, 4, 5, 8, 0, 23], 3)}</div>`);
document.write(`<div>Новий масив: ${changePlaces([2, 4, 5, 8, 0, 23], 4)}</div>`);
document.write(`<div>Новий масив: ${changePlaces([2, 4, 5, 8, 0, 23], 0)}</div>`);



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let funcZero = (array) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 0){
            let index = array.indexOf(array[i]);
            array.splice(index, 1);
            array.push(0);
        }
    }
    return array;
}
document.write(`<div>Новий масив: ${funcZero([2, 4, 0, 8, 0, 23])}</div>`);


