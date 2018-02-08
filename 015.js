//find factorial

function f(num) {
    var factorial=1;
    for(var i=1; i<=num; i++){
        factorial=factorial*i;

    }
    return factorial;

}
console.log(f(5));