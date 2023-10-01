const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if(input.value){
        //TEMP
        console.log('button clicked');
        const deleteButton = document.createElement('button');
        const li = document.createElement('li');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', () => {
        console.log('delete button clicked');
            list.removeChild(li);
            input.focus();
        });
    }
    else{
        input.focus();
        
        alert('Please enter a chapter');
    }
});