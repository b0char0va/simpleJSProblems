//check if the string consisted of +,=, letters, and numbers is true. To be true each letter must be surrounded by a + symbol.

function SimpleSymbols(str) {
    var result=new Array();
    for(var i=0; i<str.length; i++){
        var code = str.charCodeAt(i);

        if (code >= 97 && code <= 121||code >= 65 && code <= 90) {
            if((str[i-1]==='+'&& str[i+1]==='+')&&(str[i-1]!==undefined || str[i+1]!==undefined)){
                result.push(true);
            } else{
                result.push(false);
            }
        }
    }
    if(result.includes(false)){
        return false;
    } else{
        return true;
    }
}

console.log(SimpleSymbols("d+=3=+s+"));
console.log(SimpleSymbols("f+"));
console.log(SimpleSymbols("+d+===+c++==+a+"));


