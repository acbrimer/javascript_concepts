# JavaScript Concepts
### Some JS script snippets meant to be run in your browser console to better understand client-side JavaScript

## Using your browser inspector
A browser is basically just a shell that reads HTML/CSS/JS (ECMA), and renders into websites and apps. Every modern browser has dev tools built in that allow you to peek under-the-hood to see some of how this happens. This includes:
- A JavaScript console that logs output and accepts input-- think JS/browser equivalent to running a python shell in your terminal
- A DOM elements browser-- allows you to see the current HTML structure of whatever site you're looking at. Also allows you to view and change CSS for all HTML elements
- A source breakdown-- info on static files returned from server side to build the current state of your site. Useful for viewing responses from dynamic ajax requests/making sure static files load correctly from `<script>` and `<link>` tags
- Usually more bells and whistles, check it out!
    
The look and feel of these dev tools varries from browser-to-browser, but they all do basically the same thing.

## Accessing dev tools
If you have not already, I highly reccomend you take some time to pop open your browser console to explore some sites you use frequently (Holberton intranet, Google, Facebook, StackOverflow, etc.). It's usually difficult, if not impossible, to gain insight into the backend of the site, but browser console will show you anything and everything related to what's happening on the client side (styling, event listeners, sources/data for dynamic API calls, etc.).
  - Chrome: F12
  - Firefox: F12
  - Safari: command + option + c
  - Edge: ctrl + shift + c
  - IE: uninstall IE and use a different browser

* All scripts included in this repo can be run by opening your browser console, copying, pasting, and hitting enter
_Note:_ Where indicated, scripts need to be run from Holberton intranet project pages

## Files:
- 0-fix-failed-checks.js
- 1-fix-failed-checks-no-jquery.js
- 2-log-keydown-event.js
- 3-log-arrow-keys.js
- 4-arrow-keys-position.js
- 5-floating-seahorse.js
- 6-swimming-seahorse.js
- 7-alert-me.js
- 8-making-promises.js

## Concepts
- What is client-side JavaScript?
   - No `#!/usr/bin/node` shebang-- all scripts are executed at the client's browser
   - No compiling-- JS is interpreted at runtime in the client's browser
- What can client-side JavaScript do?
   - Can change anything and everything in the DOM (add/remove elements, change styles)
   - Can capture any and all user input (clicking and hovering DOM elements, pressing keys, scrolling, moving the mouse, accessing microphone/web-cam, etc.)
   - Can make API requests to retreive dynamic data-- you don't have to reload your entire page for little changes to the DOM that require additional data
   - Can listen for push notifications from a server
- What can client-side JavaScript NOT do?
   - Cannot make changes to the client's system outside of the browser-- you're running in the client's browser, not the client's machine. Makes sense that you wouldn't want to land on a website that could send you JS that could do something like delete your files or read your emails.
   - Cannot (safely) direct-connect to database (mysql -> api -> client JS, never mysql -> client JS)
   - Cannot guarantee security-- anything in your client-side JS is readable by the client
- Why use jQuery?
   - More concise syntax for accessing DOM elements
   - Additional/easier-to-work-with functions on DOM elements as jQuery objects
- What are callback functions?
- What are DOM listeners?
- What is async client-side JS?
- What is a JS promise