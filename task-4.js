'use strict'
const decButton=document.querySelector('button[data-action="decrement"]');
const incButton=document.querySelector('button[data-action="increment"]');

const counter = document.getElementById('value');

decButton.addEventListener('click',()=>{
    counter.innerHTML=Number(counter.innerHTML)-1;
});

incButton.addEventListener('click',()=>{
    counter.innerHTML=Number(counter.innerHTML)+1;
});