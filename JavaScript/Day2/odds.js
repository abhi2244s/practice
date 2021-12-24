function program (input){
    if (input = 0 ){
        return " No"

    }
    var output = "1";
    for (var i =2; i <=30 ; i++){
        if ( i %2==1){
            output  = output +"/n";
        }
        return output
    }
}
console.log(program(3));