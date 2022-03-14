// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередині div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(post => {
        let container = document.createElement('div');
        container.classList.add('container1');
        let title = document.createElement('h1');
        title.innerText = 'Posts';
        title.classList.add('title');
        let divPost = document.createElement('div');
        divPost.classList.add('post');
        for (let postElement of post) {
            let divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.innerHTML = `<h3>UserId: ${postElement.userId}</h3>
                                 <h4>Id: ${postElement.id}</h4>
                                 <h5>Title: ${postElement.title}</h5>
                                 <p>Body: ${postElement.body}</p>`;
            divPost.append(divCard);
            container.append(title, divPost);
            document.body.append(container);
        }
    });


//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередині div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        let container = document.createElement('div');
        container.classList.add('container2');
        let title = document.createElement('h1');
        title.innerText = 'Comments';
        title.classList.add('title');
        let divPost = document.createElement('div');
        divPost.classList.add('comment');
        for (let commentElement of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comCard');
            divCard.innerHTML = `<h3>PostId: ${commentElement.postId}</h3>
                                 <h4>Id: ${commentElement.id}</h4>
                                 <h5>Name: ${commentElement.name}</h5>
                                 <h6>Email: ${commentElement.email}</h6>
                                 <p>Body: ${commentElement.body}</p>`;
            divPost.append(divCard);
            container.append(title, divPost);
            document.body.append(container);
        }
    });