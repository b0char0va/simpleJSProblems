//Fibonacci number using for loop

function fib(num){
    var num1=1;
    var num2=-1;
    var n;
    var Array=[];
    for(var i=1; i<=num; i++){
        n=num1+num2;
        num2=num1;
        num1=n;
        Array.push(n);

    }
    return Array;
}
console.log(fib(10));