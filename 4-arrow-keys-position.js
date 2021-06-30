// Listen for `keydown` event on document and log if key.keyCode is:
$(document).ready(() => {
    let x = 0;
    let y = 0;
    $(document).keydown((e) => {
        switch(e.keyCode) {
            case 37:
                // Move one left
                x--;
                console.log(`Position: [${x}, ${y}]`);
                break;
            case 38:
                // Move one up
                y++;
                console.log(`Position: [${x}, ${y}]`);
                break;
            case 39:
                // Move one right
                x++;
                console.log(`Position: [${x}, ${y}]`);
                break;
            case 40:
                // Move one down
                y--;
                console.log(`Position: [${x}, ${y}]`);
                break;
        }
    });
});