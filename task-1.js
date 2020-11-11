'use strict'
const parent=document.getElementById('categories');
const h2=parent.querySelectorAll('h2');
const ul=parent.querySelectorAll('ul');



console.log(`В списке ${parent.getElementsByClassName('item').length} категории.`);
for(let i=0;i<ul.length;i+=1){
    console.log(`Категория: ${h2[i].innerText} 
Количество элементов: ${ul[i].querySelectorAll('li').length}`);
}