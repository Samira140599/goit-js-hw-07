'use strict'

const ulRef = document.querySelector('#items');


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const item1Ref = document.createElement('li');
  const item2Ref = document.createElement('li');
  const item3Ref = document.createElement('li');
  const item4Ref = document.createElement('li');
  const item5Ref = document.createElement('li');
  const item6Ref = document.createElement('li');

  item1Ref.textContent = 'Картошка';
  item2Ref.textContent = 'Грибы';
  item3Ref.textContent = 'Чеснок';
  item4Ref.textContent = 'Помидоры';
  item5Ref.textContent = 'Зелень';
  item6Ref.textContent = 'Приправы';
  
 
  ulRef.append(item1Ref, item2Ref, item3Ref, item4Ref, item5Ref, item6Ref);
  console.log(ulRef)
 



 
 