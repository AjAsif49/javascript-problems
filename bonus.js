// let number = 59;
// number = 69;
// number = 79;

// console.log(number);

// var name = "asad";

// const id = 12;




var marks = [12, 25, 45 , 87, 46, 45];

// for( var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     console.log(element);
// }




// function add(num1, num2){
//     var total = num1 + num2;
//     return total;
// }

// var result = add(10, 20);
// console.log(result);


function largestNumber(numbers){
    var larger = numbers[0];
    for ( var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
        
    }
    return larger;
}

var result = largestNumber(marks);
console.log(result);