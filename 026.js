// find the number of possible moves you can make to reach from current location to destination location if you can move only up and right in 8x8 chess board. The first part of string is current location, second part is destination location.
function count(x, y, a, b) {
    if (x === a && y === b) {
        return 1;
    }
    var moveMade = false;
    var result = 0;
    if (x < a) {
        result += count(x + 1, y, a, b);
        if (y < b) {
            result += count(x, y + 1, a, b);
            moveMade = true;
        }
    }
    if (moveMade === false && y < b) {
        result += count(x, y + 1, a, b);
        if (x < a) {
            result += count(x + 1, y, a, b);
        }
    }

    return result;
}

function ChessboardTraveling(str) {
    input = str.replace(")(", " ").replace("(", "").replace(")", "").split(" ");
    return count(parseInt(input[0]), parseInt(input[1]), parseInt(input[2]), parseInt(input[3]))
}


console.log(ChessboardTraveling("(1 1)(2 4)"));