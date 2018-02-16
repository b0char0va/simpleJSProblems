//Find factorial using recursion

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

console.log(f(25));