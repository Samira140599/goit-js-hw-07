'use strict'
const inputRef = document.getElementById('name-input');
const spanRef = document.getElementById('name-output')

inputRef.addEventListener('input',()=>{
if (inputRef.value.length!== 0){
spanRef.textContent = inputRef.value;
}
else {
spanRef.textContent = 'Незнакомец';
}
})