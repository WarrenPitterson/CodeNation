//3 variables 1 string, 1 number, 1 boolean done 
//array 4 items - add something to the end done 
//loop to cycle through the array
//function to withdraw an amount with balance remaining showing 


let balance = 1000
let accountName = ["Warren", "Bob", "Phil"]
let pinNumber = 1234
let openComment = "Hello"

console.log(openComment)

let additions = accountName.push ("Terry", "Steve")
console.log(accountName);

for (Names = 0; Names < accountName.length; Names++) {
    console.log(accountName[Names]);
}

;

const withdrawal = ( Pin, amount ) => {
    if ((Pin == pinNumber) && (amount <= balance)) {
        console.log(`Successfully withdraw of ${amount}, Reamining balance is ${balance-=amount}`)
    }
    console.log()
}


withdrawal(1234, 400)