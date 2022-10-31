let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
});

p.then((succ) => {
    console.log('This is in the then: ' + succ)
}).catch((fffail) => {
    console.log('this is in the catch ' + fffail)
});