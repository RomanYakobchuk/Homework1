let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let userDetailsContainer = document.createElement('div');
userDetailsContainer.classList.add('user-details');

let postsDetailsButton = document.createElement('button');
postsDetailsButton.classList.add('postsDetailsButton');
postsDetailsButton.innerText = 'Post details button';
let divUser = document.createElement('div');
divUser.classList.add('divUser');
let userInfo = document.createElement('div');
userInfo.classList.add('userInfo');

userInfo.innerHTML = `            <h4>Username: ${user.username}</h4>
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
userInfo.append(divAddress, contacts);

let postsContainer = document.createElement('div');
postsContainer.classList.add('posts');

postsDetailsButton.onclick = function () {
    postsDetailsButton.classList.remove('postsDetailsButton');
    postsDetailsButton.classList.add('postsDetailsButtonClose');
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                let h4 = document.createElement('h4');
                h4.innerText = post.title;
                let postDetailsButton = document.createElement('button');
                postDetailsButton.classList.add('postDetailsButtonCom');
                postDetailsButton.innerText = 'post details';
                postDetailsButton.onclick = function () {
                    location.href = `./post-details.html?data=${JSON.stringify(post)}`;
                };
                postContainer.append(h4, postDetailsButton);
                postsContainer.append(postContainer);
            }
        });
};
userDetailsContainer.append(userInfo, postsDetailsButton);
document.body.append(userDetailsContainer, postsContainer);