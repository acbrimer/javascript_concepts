// Run this in your browser console from a project page with a checker window opened
// Changes all of those nasty red checks to that sweet, sweet green
$('div.task_correction_modal li.failed').removeClass('failed');
$('div.task_correction_modal li').addClass('passed');
// Note: unfortunately, red checks will reappear when the page is reloaded (should understand why)
