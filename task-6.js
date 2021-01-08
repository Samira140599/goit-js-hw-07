'use strict'
const inputRef = document.getElementById('validation-input');

    inputRef.addEventListener('blur',()=>{
        if(Number(inputRef.value.length)<Number(inputRef.dataset.length)){
         inputRef.classList.remove('valid');
            inputRef.classList.add('invalid');
        }else{        
            inputRef.classList.remove('invalid');
           inputRef.classList.add('valid');
        }
    });