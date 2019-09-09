function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(2)) // true
console.log(isEven(11)) // false
console.log(isEven(8)) // true
console.log(isEven(65)) // false