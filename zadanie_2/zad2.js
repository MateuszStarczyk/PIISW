function specSum(args) {
    var sum = 0;
    for (var i = 0; i < args.length; ++i) {
        if (args[i] % 2)
            sum += +args[i] + 1;
        else
            sum += +args[i] - 1;
    }
    return sum;
}

print(specSum(arguments));
