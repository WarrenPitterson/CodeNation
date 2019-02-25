function capitalFirst (string) { 
    let capitalString = string.charAt(0).toUpperCase();
    return capitalString + string.substring(1);
}

console.log(capitalFirst("the 1st leter should be capital"));