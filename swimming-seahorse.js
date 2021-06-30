// Run from Holberton intranet
// Same newCSS as floating-seahorse but added top and left to div.logo
const newCSS = `<style>
    @keyframes floating-animation {
        0% {transform: scale(1);}
        50% {transform: scale(1.2);}
        100% {transform: scale(1);}
    }
    div.logo {
        position: absolute;
        animation: floating-animation 2s infinite;
        left: 10px;
        top: 10px;
    }
</style>`
// Wrap everything in ready event (invoked when you paste into browser console)
$(document).ready(() => {
    // Append CSS to make logo absolute position so we can control left,top as x,y coords
    $('head').append(newCSS);
    // Call once to get a const variable to reference div.logo
    const seahorse = $('div.logo');
    // x and y start from initial left, top defined in newCSS
    let x = seahorse.css('left').replace('px', '');
    let y = seahorse.css('top').replace('px', '');
    // speed = how many px to move logo on each arrow key keydown event
    const speed = 4;
    // Stuff from arrow-keys-position.js
    $(document).keydown((e) => {
        // e.preventDefault stopps event `e` from triggering existing callbacks
        // Added here to prevent up/down arrows from scrolling page
        e.preventDefault();
        // Same keyCode check, but setting seahorse left/top position instead of logging 
        switch(e.keyCode) {
            case 37:
                // Move one left
                x -= speed;
                seahorse.css('left', `${x}px`);
                break;
            case 38:
                // Move one up
                y -= speed;
                seahorse.css('top', `${y}px`);
                break;
            case 39:
                // Move one right
                x += speed;
                seahorse.css('left', `${x}px`);
                break;
            case 40:
                // Move one down
                y += speed;
                seahorse.css('top', `${y}px`);
                break;
        }
    });
});