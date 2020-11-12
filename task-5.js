'use strict'
let inputRef = document.getElementById('name-input');
let spanRef = document.getElementById('name-output')

inputRef.addEventListener('input',()=>{
if (inputRef.value.length!=0){
spanRef.textContent = inputRef.value;
}
else {
spanRef.textContent = 'Незнакомец';
}
})