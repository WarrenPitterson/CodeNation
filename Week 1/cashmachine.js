// check pin
// check balance
// return "something" if pin is correct
// if pin incorrect return "incorrect pin"
// if balance was insufficent then "return insufficent funds"
// if all smashing -> GO GO GO

let pinNumber = 1234 
let balance = 200

const cashWithdrawal = (pin, amount) => {
    if (pin === pinNumber && amount <= balance) {

        console.log( `Succesfully Withdraw amount: ${amount} Remaining balance ${balance-=amount}`)
    }   else if  (pin === pinNumber && amount >=balance) {
        console.log(`Insufficient funds: Amount requested ${amount} Remaining balance ${balance}`)
    }   else 
        console.log("Wrong Pin")
}


cashWithdrawal (1234,50)
cashWithdrawal (1234,100) 
cashWithdrawal (1233,300)
cashWithdrawal (1234,300)
