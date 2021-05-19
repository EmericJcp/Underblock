const form = document.getElementById('form');
const input = document.getElementById('input');
const emailVerifier = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const activeButtonOne = document.getElementById('active-button-one');
const activeButtonTwo = document.getElementById('active-button-two');
const titleOne = document.getElementById('title-card-one');
const contentOne = document.getElementById('content-card-one');
const gifOne = document.getElementById('gif-one');
const titleTwo = document.getElementById('title-card-two');
const contentTwo = document.getElementById('content-card-two');
const gifTwo = document.getElementById('gif-two');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(emailVerifier.test(input.value)) {
        input.classList.add("good")
    } else {
        input.classList.add("error")
    }
    setTimeout('input.classList.remove("error")', 1000);
})


activeButtonOne.addEventListener('click', () => {
    titleOne.style.display = "none";
    contentOne.style.display = "none";
    gifOne.style.opacity = "100";
})

activeButtonTwo.addEventListener('click', () => {
    titleTwo.style.display = "none";
    contentTwo.style.display = "none";
    gifTwo.style.opacity = "100";
})
