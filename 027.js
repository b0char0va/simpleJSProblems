function f(num) {
    if (num === 1) {
        var result = 1;
    } else  if( num===2){
        result=1;
    } else{
     result=f(num-1)+f(num-2);
    }
    return result;
}

r = f(25);

console.log(r);