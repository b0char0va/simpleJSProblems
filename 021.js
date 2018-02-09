//return true if num2 is greater than num1, return false if vice versa. Return -1 if both are equal.

function checkNums(num1,num2) {

    if (num2 > num1) {
        return true;
    } else if (num1 > num2) {
        return false;
    } else (num1 === num2)
    {
        return -1;
    }
}
console.log(checkNums(81,45));