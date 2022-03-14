// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        let wraper = document.createElement('div');
        wraper.classList.add('wraper');
        for (const post of posts) {
            let divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.innerHTML = `
                        <h3>ID: ${post.id}</h3>
                        <h4>Title: ${post.title}</h4>
                        <h5>Body: ${post.body}</h5>
                        `;
            let button = document.createElement('button');
            button.innerText = 'Open Comments';
            let button2 = document.createElement('button');
            button2.innerHTML = `Hidden comments`;
            button2.classList.add('button');
            button.classList.add('button');
            button.classList.add('button1');
            let postCom = document.createElement('div');
            postCom.classList.add('postCom');
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(value => value.json())
                    .then(comments => {
                        for (let comment of comments) {
                            if(post.id === comment.postId){
                                let divCardCom = document.createElement('div');
                                divCardCom.classList.add('cardCom');
                                divCardCom.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;
                                postCom.append(divCardCom);
                                divCard.append(postCom);
                                button.classList.remove('button');
                            }
                        }
                        button.disabled = true;
                    })
            }
            button2.onclick = function (e) {
                let com = document.getElementsByClassName('postCom');
                for (let comElement of com) {
                    comElement.remove();
                }
                button.classList.add('button');
                button.disabled = false;
            }
            divCard.append(button, button2);
            wraper.append(divCard)
            document.body.append(wraper);
        }
    });
