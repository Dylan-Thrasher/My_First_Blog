
// get blog posts from localstorage
const displayPosts = function () {
    const stringInfo = localStorage.getItem('allPosts');
    const newContent = JSON.parse(stringInfo);
    const post = document.getElementById('main');
// loop through blogposts and display them on page
for (let i = 0; i < newContent.length; i++) {
    // create a div element
    // create a h1 element
    // create a p element
    // create a h2 element
    let div = document.createElement('div');
    let title = document.createElement('h1');
    let content = document.createElement('p');
    let author = document.createElement('h2');

    // text content of h1 = newContent[i].title
    // text content of p = newContent[i].content
    // text content of h2 = newContent[i].username
    title.textContent = newContent[i].Title;
    content.textContent = newContent[i].Content;
    author.textContent = 'Shared by: ' + newContent[i].Username;

    // add class to h1
    // add class to p
    // add class to h2
    div.setAttribute('class', 'post');
    title.setAttribute('class', 'title');
    content.setAttribute('class', 'content');
    author.setAttribute('class', 'username');

// append h1 to div
// append p to div
// append h2 to div
    div.append(title);
    div.append(content);
    div.append(author);

// append div to page
    post.append(div);
}
}
// check if blogposts are null
displayPosts()