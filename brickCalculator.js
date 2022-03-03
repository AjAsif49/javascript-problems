function brickCalculator(floor){

var totalBrick = 0;

if(floor <= 10){
    totalBrick = floor * 15 * 1000;
}
else if(floor <= 20){
    var firstPart = 10 * 15 * 1000;
    var remaining = floor - 10;
    var secondPart = remaining * 12 * 1000;
    totalBrick = firstPart + secondPart;
}
else{
    var firstPart = 10 * 15 * 1000;
    var secondPart = 10 * 12 * 1000;
    var remaining = floor - 20;
    var thirdPart = remaining * 10 * 1000;
    totalBrick = firstPart + secondPart + thirdPart;
}
return totalBrick;
}

var total = brickCalculator(15)
console.log(total);




