var marks = [52, 21, 88, 56, 98 , 55, 65, 75];

max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}

console.log("Highest value is: ", max);