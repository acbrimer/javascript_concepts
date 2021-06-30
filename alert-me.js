// How do we make JS wait for a period of time before doing a thing
$(document).ready(() => {
    // setTimeout takes two args:
    //  1. A callback function to invoke after a specified time
    //  2. How long to wait (in MS) before invoking callback function
    setTimeout(() => {
        window.alert("Alert! A whole minute has passed.")
    }, 60000);
    console.log('Document is ready!');
});