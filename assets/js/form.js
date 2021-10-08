const scriptURL = 'https://script.google.com/macros/library/d/1v1yxWTMu95wYvAdUpuZl5jAxcUnfzhV7bo60AfF6H2qkKJBsE3-Kh4h7/1'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})