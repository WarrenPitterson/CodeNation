document.getElementById('Heading').style.color = "purple"
document.getElementById('Heading').style.backgroundColor="Yellow"

const list = document.getElementsByTagName('li')
list.length
list[3]

for (let i=0;i<list.length;i++){
    list[i].style.color = 'orange';
}

const notOrange = document.getElementsByClassName('not-orange');

for (let i=0;i<notOrange.length; i++) {
    notOrange[i].style.color = 'red';
}

console.log(list);
console.log(list.length);