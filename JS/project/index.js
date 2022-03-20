let usersContainer = document.createElement('div');
usersContainer.classList.add('users');
document.body.appendChild(usersContainer);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userContainer = document.createElement('div');
            userContainer.classList.add('user');
            let a = document.createElement('a');
            a.innerText = `${user.id} - ${user.name}`;
            a.href = `./user-details.html?data=${JSON.stringify(user)}`;
            userContainer.appendChild(a);
            usersContainer.appendChild(userContainer);
        }
    });