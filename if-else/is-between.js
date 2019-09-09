function isBetween(least, greatest, number) {
    if (number > least && number < greatest) {
        return true;
    } else {
        return false;
    }
}

console.log(isBetween(1, 10, 5)) // true
console.log(isBetween(1, 10, 15)) // false
console.log(isBetween(8, 9, 9)) // false
console.log(isBetween(0, 6, 5)) // true
console.log(isBetween(-20, 10, -5)) // true