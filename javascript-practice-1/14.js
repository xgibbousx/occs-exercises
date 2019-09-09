function Function(number) {
    for (var i = number; i >= 0; i--) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

Function(10);