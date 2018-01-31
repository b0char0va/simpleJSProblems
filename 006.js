//a JavaScript program to determine whether a given year is a leap year
function checkleapYear(year) {
   var date= new Date(year,2,0);
   if(date.getDate()===29){
       console.log(year+" is a leap year");
   } else {
       console.log(year+" is not a leap year");
   }
}
checkleapYear(2000);
checkleapYear(1999);
checkleapYear(1900);
checkleapYear(1600);




