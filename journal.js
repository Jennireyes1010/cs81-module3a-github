function multiply(a, b) {
    return a * b;
}
function isEven(number) {
    return number % 2 === 0;
}
function doubleNumber(number) {
    return number * 2;
}
function squareNumber(number) {
    return number * number;
}
function capitalize(text) {
    if (text.length === 0) return text;
    return text[0].toUpperCase() + text.slice(1)
}