const input = document.getElementById('input');
const button = document.getElementById('submit');

button.addEventListener('click',()=>{
    image.src = input.value;
})

//inputs the image which corresponds with the url, must have the right extension .jpg,.png....