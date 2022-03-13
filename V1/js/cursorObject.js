const customCursor = {
    
    init: function() {
        
        customCursor.addEvents();
        
    },

    addEvents: function() {
        const cursor = document.querySelector('.cursor');
        const iframe = document.querySelector("iframe");
        document.addEventListener('mousemove', e => {
            cursor.setAttribute('style', 'top: '+(e.pageY -15)+'px; left: '+(e.pageX -15)+'px;')
        })
        document.body.addEventListener('mouseenter', customCursor.addMouse);
        document.body.addEventListener('mouseleave', customCursor.removeMouse);
        iframe.addEventListener("mouseover", customCursor.removeMouse);
        iframe.addEventListener("mouseleave", customCursor.addMouse);
    },

    removeMouse: function() {
        const cursorElement = document.querySelector('.cursor');
        cursorElement.classList.add('cursor--no');
    },

    addMouse: function() {
        const cursorElement = document.querySelector('.cursor');
        cursorElement.classList.remove('cursor--no');
    }
 
}

document.addEventListener('DOMContentLoaded', customCursor.init);
