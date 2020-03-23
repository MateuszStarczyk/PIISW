function add(total, num) {
    return total + num;
}

function even(value) {
    return !(value % 2);
}

function odd(value) {
    return value % 2;
}

function add1(value) {
    return +value -1;
}

function sub1(value) {
    return +value + 1;
}

print(
    arguments
        .filter(even)
        .map(add1)
        .concat(
            arguments
                .filter(odd)
                .map(sub1))
        .reduce(add, 0)
);
