
var c=12; //side effect
/* Without c we can say fnAdd is pure function bcz it always returns the same output with same input but bcz of c output is changing */

function fnAdd(x,y){    //fnAdd is pure function.
    var a=x;
    var b=y;

    var result=a+b+c;
    return result;
}

console.log(fnAdd(5,6)); //parameters or inputs of function