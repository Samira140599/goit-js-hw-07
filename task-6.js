'use strict'
const inputRef = document.getElementById('validation-input');
const inputValue = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', () => {
if(inputValue === 6){
inputRef.classList.add('valid');
} 
else {
inputRef.classList.add('invalid');
}
});