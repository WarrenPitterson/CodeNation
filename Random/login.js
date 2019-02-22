let database = [
    {
    userName:"Warren",
    password: "password123"
    }
]

let newsFeed = [
    {
        username: "Bob",
        timeline: "Life is testing..."
    }
];

let userNamePropt = prompt("whats your password?");
let passwordPrompt = prompt("whats your password?");

function signIn(userName, password) {
    if (userName === database[0].userName && 
        password === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Incorrect Password!");
        }
    }