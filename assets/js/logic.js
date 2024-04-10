const modeSwitch = document.querySelector('#switch')
let mode = 'light'
// function to handle toggling dark mode
modeSwitch.addEventListener('click', function() {
    //      if checking if current mode is dark or light
if (mode === 'light') {
document.querySelector(':root').style.setProperty('color-scheme','dark');
mode = 'dark'  
//      swap mode  
} else {
    document.querySelector(':root').style.setProperty('color-scheme','light');
    mode = 'light'    
}
});