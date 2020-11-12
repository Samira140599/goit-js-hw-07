'use strict'
let decButton=document.querySelector('button[data-action="decrement"]');
let incButton=document.querySelector('button[data-action="increment"]');

let counter = document.getElementById('value');

decButton.addEventListener('click',()=>{
    counter.innerHTML=Number(counter.innerHTML)-1;
});

incButton.addEventListener('click',()=>{
    counter.innerHTML=Number(counter.innerHTML)+1;
});