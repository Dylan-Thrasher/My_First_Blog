// on submit get data from users inputs and store into an object
let usernameInput = document.querySelector('#username');
let titleInput = document.querySelector('#title');
let contentInput = document.querySelector('#contect');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function storeInfo() {
    const stringInfo = localStorage.getItem('allPosts');
    const allPosts = JSON.parse(stringInfo) || [];
    
    const enteredPost = {
        Username: usernameInput.value,
        Title: titleInput.value, 
        Content: contentInput.value
    };
    allPosts.push(enteredPost);
    localStorage.setItem('allPosts', JSON.stringify(allPosts));
});

// check if users inputs are null using ! operator


// get data from local storage of old blog posts

// push new blog post into array of old blog posts

// store new array of blog posts into local storage