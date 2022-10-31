const { filter } = require("rxjs");

const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

//FILTER array of items less than 100
const filteredItems = items.filter((item) => {
    return item.price <= 100
});
console.log(filteredItems);

//MAP array of just item names
const itemNames = items.map((item) => {
    return item.name; 
});
console.log(itemNames);

//FIND return first item that returns true
const foundItem = items.find((item) => {
    return item.name==='Book'
})
console.log(foundItem)

//FOREACH print out inside function
items.forEach((item) => {
    console.log(item.name);
});

//SOME return true or false
const cheapItems = items.some((item) => {
    return item.price <= 100
});
console.log(cheapItems)

//EVERY checks every item in array
const itemCheap = items.every((item) => {
    return item.price <= 1000
});
console.log(itemCheap)

//REDUCE operation in array. returns a combination of those diff operations
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0);
console.log(total)

//INCLUDES takes single argument
const numItems = [1, 2, 3, 4, 5];
const includesNum = numItems.includes(2);
console.log(includesNum);