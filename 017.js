//find sum of the numbers upto the number given, for eg: input 5, 1+2+3+4+5=15
function total(num) {
    var sum=0;
    if(num=== undefined || isNaN(num)=== true || num===" "){
        return "please provide valid input";

    }
    else{
        for(var i=0; i<=num; i++){
            sum+=i;
        }
        return sum;
    }
}
console.log(total(5));