let myName = 'Kyle'

function printName() {
    console.log(myName)
}

myName = 'Joey'
printName()
myName = 'Kate'
printName()

//------------------------------------------

let outerFunction = outerVar => {
    const outer2='Hi'
    return innerFunction = innerVar => {
        console.log('Outer Variable: ', outerVar)
        console.log('Inner Variable: ', innerVar)
        console.log('Hi')
    }
}

const newFunction = outerFunction('outside')
newFunction('inside') //closure part