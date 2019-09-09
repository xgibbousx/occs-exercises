function isDivisibleBy(number, divisor) {
    if (number % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisibleBy(15, 5)) // true
console.log(isDivisibleBy(15, 3)) // true
console.log(isDivisibleBy(15, 7)) // false