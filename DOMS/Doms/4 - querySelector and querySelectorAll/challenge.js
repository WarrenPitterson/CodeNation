//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple']
const listItems = document.querySelectorAll('li');

for (i=0; i < listItems.length; i++) {
    listItems[i].style.color=colours[i];
}

//cycles through the (li)list one at a time and assigns it the respective colour from the colour list 