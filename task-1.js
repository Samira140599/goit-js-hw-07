'use strict'
const parent=document.getElementById('categories');
const h2=parent.querySelectorAll('h2');
const ul=parent.querySelectorAll('ul');

console.log(`В списке ${parent.getElementsByClassName('item').length} категории.`);
h2.forEach((elem,index) => {
    console.log(`Категория: ${elem.innerText} 
// Количество элементов: ${ul[index].querySelectorAll('li').length}`);
});