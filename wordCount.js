var speech = "I am a   good person. I     don't snore at night";
// console.log(speech.length);
// console.log(speech[2]);

var count = 0;

for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++
    }
}

console.log(count);
