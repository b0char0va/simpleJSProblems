//Change user input date format from dd/mm/yyyy to yyyymmdd
function changeDateFormat(userInput) {

    return(userInput.split("/").reverse().join(""));

}
console.log(changeDateFormat("10/11/2017"));