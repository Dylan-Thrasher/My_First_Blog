// on submit get data from users inputs and store into an object
// get data from local storage of old blog posts
// push new blog post into array of old blog posts
// store new array of blog posts into local storage
let usernameInput = document.querySelector('#username');
let titleInput = document.querySelector('#title');
let contentInput = document.querySelector('#content');
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
submitBtn.addEventListener('click', function sendAlert(event) {

    if (usernameInput.value === '') {
        alert('Username is missing!');
        event.preventDefault();
    } if (titleInput.value === '') {
        alert('Title is missing!');
        event.preventDefault(); 
    } if (contentInput.value === '') {
        alert('Content is missing!');
        event.preventDefault();        
    }
});

// reset in case of return
submitBtn.addEventListener('click', function() {
    document.querySelector('form').reset();
});
