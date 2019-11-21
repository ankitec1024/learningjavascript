function returnMaximum(num1, num2){
    return num1 > num2 ? num1 : num2;
}

// console.log(returnMaximum(21, 21));


function isLandscape(w, h){

    return (w > h) ;
}

// console.log(isLandscape(13, 87));

function Circle(radius){

    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    
}

const another = new Circle(2);//if we remove new it give undefined.

// console.log(another)

var hh = 'this is just to test';

// console.log(hh.includes('Just'));//false
// console.log(hh.includes('just'));//true , so same as contains in java