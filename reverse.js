function reverseString(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        var reverse = char + reverse;
    }
    return reverse;
}


var statement = "Hello Alien Bhai Brother";
var result = reverseString(statement);
console.log(result);

var serial = " 1 2 3 4 5 6 7 8 9 "
console.log(reverseString(serial));