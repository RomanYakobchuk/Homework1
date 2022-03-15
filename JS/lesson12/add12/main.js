// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(users => {
            let titleCont = document.createElement('h1');
            titleCont.classList.add('title');
            titleCont.innerText = 'Users';
            let container = document.createElement('div');
            container.classList.add('container');
            for (let user of users) {
                let divUser = document.createElement('div');
                divUser.classList.add('divUser');
                let userInfo = document.createElement('div');
                userInfo.classList.add('userInfo');
                let divInfo = document.createElement('div');

                userInfo.innerHTML = `<h5>ID: ${user.id}</h5>
                                  <h4>Name: ${user.name}</h4>
                                  <h4>Username: ${user.username}</h4>
                                  <h4>Email: ${user.email}</h4>
                                  `;
                let divAddress = document.createElement('div');
                divAddress.innerHTML = `<b>Address:</b>`;
                divAddress.classList.add('divAddress');
                let address = document.createElement('ul');
                address.innerHTML = `<li>Street: ${user.address.street}</li>
                                <li>Suite: ${user.address.suite}</li>
                                <li>City: ${user.address.city}</li>
                                <li>Zipcode: ${user.address.zipcode}</li>
                                `;
                let divGeo = document.createElement('div');
                divGeo.innerHTML = `<b>Geo:</b>`;
                divGeo.classList.add('divGeo');
                let geo = document.createElement('ul')
                geo.innerHTML = `<li>Lat: ${user.address.geo.lat}</li>
                            <li>Lng: ${user.address.geo.lng}</li>`;
                divGeo.append(geo);
                address.append(divGeo);
                divAddress.append(address);
                let contacts = document.createElement('div');
                contacts.classList.add('contacts');
                contacts.innerHTML = `<h4>Phone: ${user.phone}</h4>
                                  <h4>Website: ${user.website}</h4>
                                    `;
                let divCompany = document.createElement('div');
                divCompany.innerHTML = '<b>Company:</b>';
                divCompany.classList.add('divCompany');
                let comp = document.createElement('ul')
                comp.innerHTML = `<li>Name: ${user.company.name}</li>
                                 <li>CatchPhrase: ${user.company.catchPhrase}</li>
                                 <li>Bs: ${user.company.bs}</li>`;
                divCompany.append(comp);
                contacts.append(divCompany);
                let buttonUser = document.createElement('button');
                let buttonUser2 = document.createElement('button');
                buttonUser.innerText = 'Posts';
                buttonUser2.innerText = 'Close';
                userInfo.append(divAddress, contacts, buttonUser, buttonUser2);
                let postInfo = document.createElement('div');
                buttonUser.classList.add('button');
                buttonUser.classList.add('button1');
                buttonUser2.classList.add('button');
                buttonUser.onclick = (id) => {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(value => value.json())
                        .then(posts => {
                            let wraper = document.createElement('div');
                            wraper.classList.add('wraper');
                            for (const post of posts) {
                                if(user.id === post.userId){
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
                                                    if (post.id === comment.postId) {
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
                                    postInfo.append(wraper);
                                }
                            }
                            buttonUser.disabled = true;
                        })
                }
                buttonUser2.onclick = function (e) {
                    let com = document.getElementsByClassName('wraper');
                    for (let comElement of com) {
                        comElement.remove();
                    }
                    buttonUser.classList.add('button');
                    buttonUser.disabled = false;
                }

                divUser.append(userInfo, postInfo);
                container.append(divUser);
                document.body.append(titleCont, container);
            }
        });