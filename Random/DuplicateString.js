function removeDuplicates(string) {
    let splitString = string.split('');
    const unqiqueArray = [...new Set(splitString)];
    return unqiqueArray.join('');
}

console.log(removeDuplicates('wwwwaaaaarrrreeeen'));
removeDuplicates();


//removes any duplicate characters from the string that has been passed through