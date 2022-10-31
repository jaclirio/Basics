const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

//const a = alphabet [0]
//const b = alphabet[1]
const [a,, c, ...rest] = alphabet //A C DEF

console.log (a)
console.log(c)
console.log(rest)

//const newArray = [...alphabet, ...numbers] //ABCDEF123456
const newArray= alphabet.concat(numbers) //You can also use this also
console.log(newArray)

//-----------------------------------------------------------------------

function sumAndMultiply(a, b) {
    return [a + b, a * b]
}
const [sum, multiply, division = 'No division'] = sumAndMultiply (2, 3)
console.log(sum)
console.log(multiply)
console.log(division)

//-----------------------------------------------------------------------

const personOne = {
    names:'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state:'One of them'
    }
}

const personTwo = {
    names:'Sally',
    age: 32,
    favFood:'Watermelon',
    address: {
        city: 'Somewhere else',
        state:'Another one of them'
    }
}

const { names:firstName='John', address:{city} } = personTwo //Overwrite names to John

console.log(firstName)
console.log(city)

const personThree = { ...personOne, ...personTwo } //Overwrite personOne data
console.log(personThree)

//-----------------------------------------------------------------------

function printUser({ names, age, favFood='Ice Cream' }) {
    //console.log(user)
    console.log('Name is:',names,'. Age is:',age,'Food is',favFood)
}
printUser(personOne)