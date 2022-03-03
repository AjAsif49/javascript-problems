function factorial(number){
    var total = 1;
    for( var i = 1; i <= number; i++){
        var total = total * i;
        
    }
    return total;
}

var result = factorial(5);
console.log(result);