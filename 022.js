// convert number into hours and minutes and output as hour:minute
function TimeConvert(num) {

    var hours= Math.floor(num/60);
    var minutes= num%60;
    return(hours+":"+minutes);

}

console.log(TimeConvert(65));