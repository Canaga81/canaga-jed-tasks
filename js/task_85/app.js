const greyBtn = document.querySelector('#grey');
const redBtn = document.querySelector('#red');
const blueBtn = document.querySelector('#blue');
const yellowBtn = document.querySelector('#yellow');

const body = document.querySelector('body');


greyBtn.addEventListener('click', () => {
    greyFunk()
});

function greyFunk () {
    body.style.backgroundColor = 'grey'
}


redBtn.addEventListener('click', () => {
    redFunk()
});

function redFunk () {
    body.style.backgroundColor = 'red'
}


blueBtn.addEventListener('click', () => {
    blueFunk()
});

function blueFunk () {
    body.style.backgroundColor = 'blue'
}


yellowBtn.addEventListener('click', () => {
    yellowFunk()
});

function yellowFunk () {
    body.style.backgroundColor = 'yellow'
}