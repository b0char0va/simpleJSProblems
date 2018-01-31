//Calculates days till next Christmas.

var date=new Date();
var christmas=new Date(date.getFullYear(),11,25);
if(date.getMonth()===11 && date.getDate()>25) {
    christmas.setFullYear(christmas.getFullYear()+1);
}
var oneDay=24*60*60*1000;
console.log(Math.ceil((christmas.getTime()-date.getTime())/oneDay));





