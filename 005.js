//calculate area of triangle from three sides.

function areaOfTriangle(a,b,c) {
    var p=(a+b+c)/2;
    var area=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return area;

}

console.log(areaOfTriangle(12,15,8));
console.log(areaOfTriangle(12.40,15.67,8.09));
console.log(areaOfTriangle(5,6,7));