function add(total, num) {
    return total + num;
}

function even(value) {
    return !(value % 2);
}

function odd(value) {
    return value % 2;
}

function sub1(value) {
    return +value -1;
}

function add1(value) {
    return +value + 1;
}

function specSum(args) {
    return args
        .filter(even)
        .map(sub1)
        .concat(
            args
                .filter(odd)
                .map(add1))
        .reduce(add, 0);
}

print(specSum(arguments));
