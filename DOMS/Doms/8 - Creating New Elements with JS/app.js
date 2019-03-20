const input = document.getElementById('input');
const button = document.getElementById('submit');
let list = document.getElementsByTagName('ul')[0];
const showhidebtn=document.getElementById('showhide-btn');

button.addEventListener('click',()=> {
    let listItem = document.createElement('li');
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = '';
})

showhidebtn.addEventListener('click',()=>{
    let list = document.getElementsByTagName('ul')[0];
    if(list.style.display == 'none') {
        list.style.display = 'block';
        showhidebtn.textContent = 'hide';
    } else {
        list.style.display = 'none';
        showhidebtn.textContent = 'show';
    }
})
