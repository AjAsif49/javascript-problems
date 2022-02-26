
function arraySum(marks){
    var sum = 0;

    for(var i = 0; i < marks.length; i++){
        var element = marks[i];
        sum = sum + element;
    }
    return sum;    
}

var marks = [52, 21, 88, 56, 98 , 55, 65, 70, 76, 89, 09, 99];
var result = arraySum(marks);
console.log(result);

var total = arraySum([10, 54, 78, 65, 78, 55]);
console.log(total);



var array = [1, 2, 3, 4, 5];
    
    // Getting sum of numbers
    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum);