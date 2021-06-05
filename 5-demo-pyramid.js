const row = 10

// *
// * *
// * * *

let star = ''

for (let r = 1; r <= row; r++) {
    for (let s = 1; s <= r; s++) {
        star += '* '
    }
    star += '\n'
}

console.log(star)
