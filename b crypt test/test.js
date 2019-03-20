const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'not_bacon';
const notThePassword = 'bacon';

    bcrypt.hash(myPlaintextPassword, saltRounds, function(err,hash) {
        console.log(hash);
        bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
            console.log(res);
    });
});
