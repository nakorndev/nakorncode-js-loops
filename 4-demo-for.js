const numbers = [7, 4, 9, 1, 2, 12, 6]
let min = numbers[0]
let max = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i]
    }
    if (numbers[i] > max) {
        max = numbers[i]
    }
}

console.log(min, max)
