//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let i = 0;
while(i < arr.length) {
    console.log('цикл while -',arr[i]);
    i++;
}

// 2. перебрати його циклом for
for(let n = 0; n < arr.length; n++){
    console.log('цикл for -', arr[n]);
}

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
let u = 0;
while (u < arr.length){
    if([u] % 2 === 1){
        console.log('цикл while з непарним індексом-', ` ${u}`, arr[u]);
    }
    u++;
}

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
for(let y = 0; y < arr.length; y++){
    if([y] % 2 === 1){
        console.log('цикл for з непарним індексом-', ` ${y}`, arr[y]);
    }
}

// 5. перебрати циклом while та вивести числа тільки парні значення
let g = 0;
while (g < arr.length){
    if([g] % 2 === 0){
        console.log('цикл while з парним індексом-', ` ${g}`, arr[g]);
    }
    g++;
}

// 6. перебрати циклом for та вивести числа тільки парні значення
for(let q = 0; q < arr.length; q++){
    if([q] % 2 === 0){
        console.log('цикл for з парним індексом-', ` ${q}`, arr[q]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for(let w = 0; w < arr.length; w++){
    if(arr[w] % 3 === 0){
        arr[w] = 'okten';
        console.log('число кратне 3 -', ` ${w}`, arr[w]);
    }
}

// 8. вивести масив у зворотному порядку.
for(let r = arr.length; r >= 0; r--){
    console.log('зворотній порядок:', arr[r]);
}


// 9. всі попередні завдання (окрім 8), але у зворотному циклі (с заду на перед)

let i2 = arr.length-1;
while(i2 >= 0) {
    console.log('цикл while -',arr[i2]);
    i2--;
}


for(let n = arr.length-1; n >= 0; n--){
    console.log('цикл for -', arr[n]);
}

let u2 = arr.length-1;
while (u2 >= 0){
    if([u2] % 2 === 1){
        console.log('цикл while з непарним індексом-', ` ${u2}`, arr[u2]);
    }
    u2--;
}

for(let y = arr.length-1; y >= 0; y--){
    if([y] % 2 === 1){
        console.log('цикл for з непарним індексом-', ` ${y}`, arr[y]);
    }
}

let g2 = arr.length-1;
while (g2 >= 0){
    if([g2] % 2 === 0){
        console.log('цикл while з парним індексом-', ` ${g2}`, arr[g2]);
    }
    g2--;
}

for(let q2 = arr.length-1; q2 >= 0; q2--){
    if([q2] % 2 === 0){
        console.log('цикл for з парним індексом-', ` ${q2}`, arr[q2]);
    }
}


for(let w = arr.length-1; w >= 0; w--){
    if(arr[w] % 3 === 0){
        arr[w] = 'okten';
        console.log('число кратне 3 -', ` ${w}`, arr[w]);
    }
}

