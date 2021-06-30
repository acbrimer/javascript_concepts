// What happens when you need to call a function that takes a while to return data?
// Implements async functionality inside of JS promise

// fakeDataDownload returns a Promise
// Promise returns data after async operation has completed by calling `resolve` or `reject`
function fakeDataDownload() {
    return new Promise(function(resolve, reject) {
        // Mimic a slow server response with setInterval (5 seconds)
        setInterval(() => {
            // Create some fake data to send back
            const fakeData = {
                'response_id': Math.random(),
                'timestamp': new Date(),
                'status': 'OK',
                'data': [{
                    "id": 1,
                    name: "Oklahoma"
                }, {
                    "id": 2,
                    name: "Arkansas"
                }]
            }
            // After 5 seconds, call `resolve` with the data we want to return from promise
            resolve(fakeData);
        }, 5000);
    });
}
$(document).ready(() => {
    // Because `fakeDataDownload` returns a promise, we can't simply do `var data = fakeDataDownload()`
    // Instead, we call the function and wait from data from `resolve` with `.then((data) => {...do stuff w/ data})`
    fakeDataDownload().then((data) => {
        // Here we are inside of the `resolve` function where we receive `data` after 5s
        // Because we are waiting on a promise, window.alert will not be called until promise resolves
        window.alert(data);
    });
    // We don't have to wait for the Promise to resolve to continue running out script
    // We will see the following console.log before the window.alert in fakeDataDownload().then()
    console.log('Fetching fake data...');
})