function result(clicked_id) {
    var firstNumber = document.getElementById("firstNumber");
    var f = firstNumber.value;
    var secondNumber = document.getElementById("secondNumber");
    var s = secondNumber.value;
    var output = document.getElementById("output");

    if (clicked_id === "button1") {
        output.innerHTML = multiplyAnswer(f, s);

    } else if (clicked_id === "button2") {
        output.innerHTML = divideAnswer(f, s);
    }
}

function multiplyAnswer(f, s) {
    if (f === "" || isNaN(f) === true || s === "" || isNaN(s) === true) {
        return ("Please give a valid input");
    } else {
        return ("Answer is " + (f * s));
    }
}

function divideAnswer(f, s) {
    if (f === "" || isNaN(f) === true || s === "" || isNaN(s) === true) {
        return ("Please give a valid input");
    } else {
        return ("Answer is " + (f / s));
    }
}

