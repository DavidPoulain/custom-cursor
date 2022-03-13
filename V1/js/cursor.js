const cursor = document.querySelector('.cursor');
const iframe = document.querySelector("iframe");

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: '+(e.pageY -15)+'px; left: '+(e.pageX -15)+'px;')
})

document.body.addEventListener('mouseleave', removeMouse);
iframe.addEventListener("mouseover", removeMouse);
iframe.addEventListener("mouseleave", addMouse);

function removeMouse(event) {
    const cursorElement = document.querySelector('.cursor');
    cursorElement.classList.add('cursor--no');
}

document.body.addEventListener('mouseenter', addMouse);

function addMouse(event) {
    const cursorElement = document.querySelector('.cursor');
    cursorElement.classList.remove('cursor--no');
}


