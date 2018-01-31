//a JavaScript program to remove a character at the specified position of a given string and return the new string.

function removeItemFromString(string,index){
    var string=(string.replace(string[index],""));
    return(string);
}
console.log(removeItemFromString("Sun is up",3));

