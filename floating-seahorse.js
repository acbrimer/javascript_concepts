// Run from Holberton intranet
// Applies new styles to Holberton logo by adding new CSS to page
const newCSS = `<style>
    @keyframes floating-animation {
        0% {transform: scale(1);}
        50% {transform: scale(1.2);}
        100% {transform: scale(1);}
    }
    div.logo {
        position: absolute;
        animation: floating-animation 2s infinite; 
    }
</style>`
// ^ in a real project, this could go in a CSS file and be added through <link> on the server side
$('head').append(newCSS);