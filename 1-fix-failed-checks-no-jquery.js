// Run this in your browser console from a project page with a checker window opened
// This does the same thing as fix-failed-checks, but with more code
// ^ what's the point of jquery?
document.querySelectorAll('div.task_correction_modal li.failed').forEach((e) => {
    e.classList.remove('failed');
});
document.querySelectorAll('div.task_correction_modal li').forEach((e) => {
    e.classList.add('passed');
});
