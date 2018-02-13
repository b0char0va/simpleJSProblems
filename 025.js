//determine how many dots exist in a pentagonal shape around a center dot on the Nth iteration. Refer README.md file for full problem description.

function PentagonalNumber(num) {
    var side234;  var side5; var side1=0; var dots=[];
    for (var i = 1; i <= num; i++) {
        side1 += 1;
        side234 = side1 - 1;
        side5 = side1 - 2;
        if(side5===-1){
            side5=0;
        }
        dots.push(side1 + (side234 * 3) + side5);
    }
    var sum = dots.reduce(add, 0);
    return sum;
}
function add(a, b) {
    return a + b;
}
console.log(PentagonalNumber(4));