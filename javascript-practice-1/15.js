function Function(limit, step) {
    var currentValue = 0.0;
    while (currentValue <= limit) {
        console.log(currentValue);
        currentValue += step;
    }
}

Function(2, 0.25);