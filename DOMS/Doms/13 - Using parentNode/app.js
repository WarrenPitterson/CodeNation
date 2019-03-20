const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName('LI');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    let listItem = document.createElement('LI');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/

list.addEventListener('click',(event)=>{
    if(event.target.tagName == 'LI'){
        let LI = event.target;
        let ul = LI.parentNode;
        ul.removeChild(li);
    }
})