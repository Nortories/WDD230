const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if(input.value){
        //TEMP
        console.log('button clicked');
    }
    else{
        input.focus();
        alert('Please enter a chapter');
    }
});