'use strict'
const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

inputRef.addEventListener('input', () => {
spanRef.style.fontSize = '24px';
});