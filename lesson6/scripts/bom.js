const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray= getChapterList || [];

button.addEventListener('click', () => {
    if(input.value){
        //TEMP
        console.log('button clicked');
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
        const deleteButton = document.createElement('button');
        // const li = document.createElement('li');
        // li.textContent = input.value;
        // deleteButton.textContent = '❌';
        // li.append(deleteButton);
        // list.append(li);
        // deleteButton.addEventListener('click', () => {
        // console.log('delete button clicked');
        //     list.removeChild(li);
        //     input.focus();
        // });
    }
    else{
        input.focus();
        
        alert('Please enter a chapter');
    }
});

function getChapterList(){
    chaptersArray.forEach(chapter => {
        displayList(chapter);
      });
}

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
  }

  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }