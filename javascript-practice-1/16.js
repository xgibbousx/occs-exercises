function Function(start, step) {
    var currentValue = start;
    while (currentValue >= 0) {
        console.log(currentValue);
        currentValue -= step;
    }
}

Function(5, 0.25);