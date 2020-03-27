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

print(arguments
    .filter(even)
    .map(sub1)
    .concat(
        arguments
            .filter(odd)
            .map(add1))
    .reduce(add, 0));
