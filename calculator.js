function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return NaN; // Handle division by zero
    }
    return a / b;
}

function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    square,
    cube
};