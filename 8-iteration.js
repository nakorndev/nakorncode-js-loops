const abc = ['a', 'b', 'c', 'd', 'e']

// for (let i = 0; i < abc.length; i++) {
//     console.log(abc[i])
// }

// for (let item of array) {}

for (let item of abc) {
    console.log(item)
}

////////////////////////////

const person = { fName: 'John', lName: 'Doe', age: 18 }

for (let key in person) {
    console.log(key, ':', person[key])
}
