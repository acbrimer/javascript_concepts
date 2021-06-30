// Listen for `keydown` event on document and log the keycode to console
$(document).keydown((e) => {
    // Here we're inside of a function that gets called for any key pressed
    // Param `e` is an object with info on the event (in this case, a key pressed)
    // We can see which key was pressed by getting the keyCode from the event
    console.log(`Key Pressed! keyCode: ${e.keyCode} Char: ${String.fromCharCode(e.keyCode)}`);
});