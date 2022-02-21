//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let arr = [];
function scraper(startElement) {
    let children = startElement.children;
    for (const child of children) {
        for (const childElement of child.classList) {
            arr.push(childElement);
        }
        scraper(child);
    }
}
scraper(document.body);
console.log(arr);