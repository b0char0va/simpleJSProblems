//a JavaScript program to create a new string adding "Py" in front of a given string.
//If the given string begins with "Py" then return the original string.

function stringChecker(foo) {
    if((foo.toLowerCase().charAt(0)==="p")&&(foo.toLowerCase().charAt(1)==="y")){
        return foo;
    } else{
        return "Py"+foo;
    }
}

console.log(stringChecker(" "));


function stringChecker2(foo) {
    if((foo.toLowerCase().substring(0,2)==="py")){
        return foo;
    } else{
        return "Py"+foo;
    }
}

console.log(stringChecker2("python"));

