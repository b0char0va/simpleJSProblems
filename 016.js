//convert the string's each letter to next letter and also convert every vowel in the new string to upper case.


function changeStr(str) {
    str= str.replace(/[a-z]/g, function (char) {
        if (char === 'z') {
            return 'a';

        } else {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }

    });
    return str.replace(/[a,e,i,o,u]/g, function (char) {
        return char.toUpperCase();

    });
}

console.log(changeStr("bean bag"));
