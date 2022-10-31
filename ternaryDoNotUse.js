const number = 10
let result, result2

if (number === 0) {
    result = 'You have nothing'
} else if (number < 10) {
    result = 'You have very little'
} else {
    result = 'You have a lot'
}

result2 = number === 0 ? 'You have nothing' : (  //Ternary
    number < 10 ? 'You have very little' : 'You have a lot'
)

console.log(result)
console.log(result2)