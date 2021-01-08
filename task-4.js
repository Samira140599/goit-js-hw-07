'use strict'
const decButton=document.querySelector('button[data-action="decrement"]');
const incButton=document.querySelector('button[data-action="increment"]');
const counter = document.getElementById('value');

decButton.addEventListener('click',()=>{
    if (counter.textContent > 0) counter.textContent -= 1;
});

incButton.addEventListener('click',()=>{
    counter.textContent = +counter.textContent + 1;
});