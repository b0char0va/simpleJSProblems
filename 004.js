//Write a JavaScript program to get the current date and then changing format.
var currentDate= new Date();
var date=currentDate.getDate();
var month=currentDate.getMonth()+01;
var year=currentDate.getFullYear();

if(date<10) {
    date="0"+date;
}
if(month<10){
    month="0"+month;
}

console.log(date+"/"+month+"/"+year);
console.log(date+"-"+month+"-"+year);
console.log(date+"."+month+"."+year);
