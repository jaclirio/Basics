let a = 10
let b = "Hi"
let c = [1, 2] //0x01
let d = [1, 2] //0x02

console.log('a = ', a)
console.log('b = ',b)
console.log('d = ', d)

console.log('c === d', c === d)
console.log('c == d', c == d)

console.log('c = ', c)
add(c, 3)
console.log('c = ', c)

function add(array, element) { //0x01, 3
    array.push(element)
}