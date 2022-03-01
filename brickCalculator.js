var total = 0;


function brickCalculator(floor){

if(floor <= 10){
        for( var i = 1; i <= floor; i++){
            var firstTotal = floor * 15 * 1000;
            total = total + firstTotal;
            return total;

        }

    }

    // if(floor > 10){
    //     for( i = 1; i <= floor; i++){
    //         var firstTotal = floor * 15 * 1000;
    //         total = total + firstTotal;

    //     for( i = 11; i < floor; i++){
    //         var SecondTotal = floor * 12 * 1000;
    //         total = total + SecondTotal;
    //     }
    //     return total;
        
    // }
    
}
    
var result = brickCalculator(10);
console.log(result);