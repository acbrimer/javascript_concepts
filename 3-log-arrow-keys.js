// Listen for `keydown` event on document and log if key.keyCode is:
    // - Left: 37
    // - Up: 38
    // - Right: 39
    // - Down: 40
$(document).keydown((e) => {
    switch(e.keyCode) {
        case 37:
            console.log(`${e.keyCode}- LEFT`);
            break;
        case 38:
            console.log(`${e.keyCode}- UP`);
            break;
        case 39:
            console.log(`${e.keyCode}- RIGHT`);
            break;
        case 40:
            console.log(`${e.keyCode}- DOWN`);
            break;
    }
});