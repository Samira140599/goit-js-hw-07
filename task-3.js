'use strict'
const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

 const gallery = document.getElementById('gallery');

 const createGallery=function(arr,id){
 
     for(let i=0;i<arr.length;i+=1){
         let str='<li><img src=""></li>';
         id.insertAdjacentHTML('afterbegin', str);
         const li=id.querySelector('li');
         const img=id.querySelector('img');
         li.classList.add('item');
         img.classList.add('images');
         img.setAttribute('src',arr[i].url);
         img.setAttribute('alt',arr[i].alt);        
     }
 }
 createGallery(images,gallery);
 
     

    

   

   
    

