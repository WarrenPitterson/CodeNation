const placeholder = document.getElementById('placeholder');
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const list = document.getElementById('list');

submit.addEventListener('click',()=>{
    placeholder.style.color ='goldenrod';
    placeholder.textContent = `<li>${input.value}</li>`;
    placeholder.textContent = input.value;
})

/*takes whatever is entered into the input and when clicked it will turn the text 'goldenrod */