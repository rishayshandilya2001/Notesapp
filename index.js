// Get the button and add a click event listener
let createbtn = document.querySelector('.create-notes');
createbtn.addEventListener('click', addNotes);

let id = 0;
let notesbox = document.querySelector('.notes-box');

function addNotes() {
    let inputbox = document.createElement('p');
    let img = document.createElement('img');
    inputbox.className='input-box'
    inputbox.setAttribute('contenteditable','true')
   img.src='images/delete.png'
   img.className='deletebtns'
    img.addEventListener('click', function() {
        div.remove();
        updatestorage()
    });

    notesbox.appendChild(inputbox).appendChild(img);
    updatestorage()
}

notesbox.addEventListener('click',function(e)
{
    if(e.target.tagName==='IMG')
    {
        e.target.parentElement.remove()
        updatestorage()
    }
})

function updatestorage()
{
    localStorage.setItem('notes',notesbox.innerHTML)
}

notesbox.innerHTML=localStorage.getItem('notes')