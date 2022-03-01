function woodCalculator(chair, table, bed){
    var total = chair * 1 + table * 3 + bed * 5;
    return total;
}

var chair = 3;
var table = 2;
var bed = 10;

var result = woodCalculator(chair, table, bed);
console.log(result);