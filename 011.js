//a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function cToF(c) {
    var f = (c*1.8)+32;
    return (f);
}

function fToC(f) {
    var c = (f-32)*5/9;
    return (c);
}
console.log(cToF(60));
console.log(fToC(45));