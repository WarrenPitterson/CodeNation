function removeDuplicates(string) {
    let splitString = string.split('');
    const uniqueArray = [...new Set(splitString)];
    return uniqueArray.join('');
}

console.log(removeDuplicates('wwwwaaaaarrrreeeen'));
removeDuplicates();


//removes any duplicate characters from the string that has been passed throughl