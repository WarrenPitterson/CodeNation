const listItems = document.querySelectorAll('li:nth-child(even)');

for (let i=0; i < listItems.length;i++) {
    listItems[i].getElementsByClassName.color = 'lightgreen';
}

console.log(listItems);
console.log(listItems.length);


//selects all the even items on the list within the browser terminal
