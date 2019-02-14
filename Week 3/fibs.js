//generates 1st 20 numbers in fibonnaci sequenece in a for loop 

let fibs = [1, 1];
for (let i = fibs.length; i < 21; i++) {
    fibs[i] = fibs[i - 2] + fibs[i - 1];
}
console.table(fibs);

// can also be done in a function loop