const os = require('os');
const fs = require('fs');

let userDetails = os.userInfo().username;

fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
    if (err) {
        console.log('opps');
    }
})

//fs = file system 
//os = operating system