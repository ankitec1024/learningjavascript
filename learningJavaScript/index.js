// console.log('hello world')

// ----------------------------------------------------------------------------------------

// console.log('interestRate');
// const interestRate = 0.5;
// interestRate = 3;// gave error here because , const work as final
// console.log(interestRate);
// ---------------------------------------------------------------------------------------

//no need to declare a type of variable
// name = 'ankit';
// console.log(name);

// ---------------------------------------------------------------------------------------
// name  = 'ankit'
// console.log(typeof name)  //or
// console.log(typeof (name))

// console.log(parseInt("name")) //o/p -> NaN(not a number)
// console.log(isNaN("name")) //o/p true
// console.log(isNaN(1)) //o/p false
// console.log(+"10") //o/p 10, quick way to convert into a nubmer
// ---------------------------------------------------------------------------------------

                                //   BOOLEAN
// console.log(true) // true
// console.log(false) // false
// console.log(null) // null


// var shouldbenull = null;
// if(shouldbenull === true){
//     console.log("badhiya hai");
// }else{
//     console.log("nhi bdhiya to nhi");
// }
//o/p->   nhi bdhiya to nhi


// var hascontent = "kkkkkkk";
// console.log(hascontent === true); //false
// console.log(Boolean(hascontent)); //true

// var doesNothascontent = ""; //or var doesNothascontent;
// console.log(doesNothascontent === true); //false
// console.log(Boolean(doesNothascontent)); //false
// console.log(doesNothascontent);  //undefined , and it's type is also undefined

// var notanumber = NaN;
// console.log(Boolean(notanumber)); //false //without boolean also false

// var isZero = 0;
// console.log(Boolean(isZero)); //false //without Boolean also false

// var isNonZero = 1; //or any +ve or _ve no
// console.log(Boolean(isZero)); //true  //but without Boolean it's false

// var myArray = ["a", "b", 9, "d"];
// console.log(Boolean(myArray));//true

// var myArray1 = [];
// console.log(Boolean(myArray1));//true

// [] array is a type

// var myarray = [];
// if(myArray){ // OR if(Boolean(myArray)) //internally the Boolean is present in all if statement condition
//     console.log("has the truth value");
// }else{
//     console.log("has not the truth value");
// }

//o/p = has the truth value

// console.log(null === undefined) //false
//undefined is not initialized value and null is the deliverately not assigned any kind of value


// ---------------------------------------------------------------------------------------

                                //   OBJECT

//objects can be created by two way
// 1.
//  var myObject = new Object();
//  myObject['1'] = "chris";
//  myObject['2'] = "leni";
//  myObject['3'] = "scofield";

 //2.   --> most preffered way to create a single object of pericular type

//  var myObject1 = {
//      1:"chris",
//      2:"leni",
//      3:"scofield",
//      4:"belly",
//  }

 //both way are same, they create a object for us, but the second one just call as object literal

//  myObject1['6'] = "Ashley" //can add a new property dynamically and seperately

 //can defined the function and even an another object as a value inside the objecet literal key


 //there is an another defining way a object , when we have to use the same pattern of object , with different kinds of value(but keys are same),
 //in this approach , instead of declaring the same pattern again and again we use the --> Constructon pattern for creating an object
 //work as a function that we can use it again and again to create a multiple object of same pattern and  different kind of value.
 //this is a OOP method, just passing the value of all keys in it's argument
 //in this we can also declair function(and object also may be) is a value inside it's key
 //the typeof this function is Object
 // =  operator is used inside it's key and value relation

 //FACTORY FUNCTION, AND CONSTRUCTOR FUNCTION


                                 //   ARRAYS





// isme baki ka kha gya pata nhi but I think ki hmne Loops tk complete kr liya tha isme.






