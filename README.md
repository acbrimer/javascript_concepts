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