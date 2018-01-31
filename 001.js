//Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Friday.
//Current time is : 4 PM : 50 : 22

var d = new Date();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = weekdays[d.getDay()];
var n = d.toLocaleString("en-US", {hour: 'numeric', hour12: true});

console.log("Today is: " + day + ".");
console.log("Current Time is: " + n.toUpperCase() + ":" + d.getMinutes() + ":" + d.getSeconds());