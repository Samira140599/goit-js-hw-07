'use strict'

const ulRef = document.getElementById('ingredients');


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const addLi=ingredients.map(el=>{
    ulRef.insertAdjacentHTML('afterbegin',`<li>${el}</li>`);
});

  console.log(ulRef)
 



 
 