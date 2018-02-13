//fnd fibonacci number sequence using recursion
function fib(num) {
    if (num === 0) {
        return 0;
    } else if (num <= 2) {
        return 1;
    } else {
        return fib(num - 1) + fib(num - 2);
    }
}


function fibSequence(num) {
    for (var i = 0; i <= num-1; i++) {
        console.log(fib(i));
    }
}

fibSequence(10);

