let favorites = JSON.parse(localStorage.getItem('favorites'));
let ul = document.createElement('ul');
for (const user of favorites) {
    let li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
    document.body.appendChild(ul);
}
