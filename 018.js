// convert every first letter of each word in a string to upper case.

function capital(str) {
    var str1=str.split(" ");
    for(var i=0; i<str1.length; i++){

        str1[i]=str1[i].charAt(0).toUpperCase()+ str1[i].slice(1);;

    }
    return str1.join(" ");




}
console.log(capital("hello world"));