const inputField = document.getElementById("input-field")
const outputField = document.getElementById("output-field")
const buttons = document.querySelectorAll("button")

inputField.addEventListener (
    "keyup", 
    () => outputField.innerHTML = inputField.value
);

let boldState = false;
let italicState = false;
let underlineState = false;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('uppercase')) {
            outputField.innerHTML = outputField.innerHTML.toUpperCase();
        } else if (btn.classList.contains('lowercase')) {
            outputField.innerHTML = outputField.innerHTML.toLowerCase();
        } else if (btn.classList.contains('capitalize')) {
            outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1).toLowerCase();
        } else if (btn.classList.contains('bold')) {
            boldState = !boldState; // Toggle the state
            outputField.style.fontWeight = boldState ? 900 : 'normal';
        } else if (btn.classList.contains('italics')) {
            italicState = !italicState; // Toggle the state
            outputField.style.fontStyle = italicState ? 'italic' : 'normal';
        } else {
            underlineState = !underlineState; // Toggle the state
            outputField.style.textDecoration = underlineState ? 'underline' : 'none';
        }
    })
}) 

