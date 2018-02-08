//find the longest word in string

function LongestWord(sen) {
    var temp =[];
    temp=sen.split(/[^A-Za-z]/);
    max=temp[0];

    for(var i=0; i<temp.length; i++){
        if(max.length<temp[i].length){
            max=temp[i];
        }
    }


    // code goes here
    return max;

}

// keep this function call here
console.log(LongestWord("hey!@ bird"));