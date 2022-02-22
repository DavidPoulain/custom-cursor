const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: '+(e.pageY -10)+'px; left: '+(e.pageX -10)+'px;')
})

document.body.addEventListener('mouseleave', removeMouse);

function removeMouse(event) {
    console.log('ok');
    const cursorElement = document.querySelector('.cursor');
    cursorElement.classList.add('cursor--no');
}

document.body.addEventListener('mouseenter', addMouse);

function addMouse(event) {
    const cursorElement = document.querySelector('.cursor');
    cursorElement.classList.remove('cursor--no');
}