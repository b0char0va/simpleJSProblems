//reverse the string

function reverseStr(str) {
    var str1="";

    for(var i=(str.length-1); i>=0; i--){
        str1= str1+str.charAt(i);
    }
    return str1;


}
console.log(reverseStr("blab"));