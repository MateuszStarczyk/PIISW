var sum = 0;
for (var i = 0; i < arguments.length; ++i) {
    if (arguments[i] % 2)
        sum += +arguments[i] + 1;
    else
        sum += +arguments[i] - 1;
}
print(sum);
