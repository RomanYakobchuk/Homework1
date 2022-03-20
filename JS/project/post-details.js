let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
console.log(post);
let postContainer = document.getElementsByClassName('post-det')[0];
postContainer.innerHTML = `
                        <h3>ID: ${post.id}</h3>
                        <h4>Title: ${post.title}</h4>
                        <h5>Body: ${post.body}</h5>`;

let commentsContainer = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            let commentContainer = document.createElement('div');
            commentContainer.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;

            commentsContainer.appendChild(commentContainer);
        }
    });