//a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
function isItSunday(year) {
    if (year >= 2014 && year <= 2050) {
        var date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            console.log("it is Sunday on 1st January of " + year);
        }
        else {
            console.log("it is not Sunday on 1st January of " + year);
        }
    } else {
        console.log("please provide an year between 2014 and 2050.");
    }
}

isItSunday(2018);
isItSunday(2051);
