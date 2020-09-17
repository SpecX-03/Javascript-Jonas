// var years = [1990,1998,2016,1990,1993]


// function arrayCalc(arr, func) {
//     var funARR =  [];
//     for (i = 0; i < arr.length; i++) {
//         funARR.push(func(arr[i]));
//     }
//     return funARR;
    
// }
//         function calcAge(el) {
//             return 2020 - el;
//         }
// var ages = arrayCalc(years, calcAge)
// console.log(ages);


// Function Constructor

var Person = function(name,yearofBIRTH,job){
    this.nick = name,
    this.yearofBIRTH = yearofBIRTH,
    this.job = job,
    this.salary = function() {
        console.log(100000)
    }
    
}



var john = new Person( 'Immax',2002,'Software Developer'
);
// Prototype
Person.prototype.age = function() {
        console.log(2020 - this.yearofBIRTH);
}
john.age();

// Object.create


var guy = {
    age: function() {
        console.log(2020 - this.yearofBIRTH);}

    };
    var jane = Object.create(guy);
jane.fathersname = 'mike'
jane.talents = 'singer';
console.log(jane);

// Type 2 

johnson = Object.create(guy,{
    fathersname : {value: 'miller'},
    talents : { value: 'Speed Runner'},
    age: {value: 2002}
    });
    console.log(johnson);

// primitive vs objects
var a = 43;
var b = 26;
a = 20;

// Passing function as function argument

var years = [1990,1999,1998,2002
]

function ageCalc(arr,func) {
    arrRes = []
    for(var i = 0;i<arr.length;i++){
        arrRes.push(func(arr[i]))

    }
    return arrRes;
    
}
function calcuAge(el) {
    return 2020 - el;
}

function isAdult(el) {
    var calc = 2020 - el;
    if (calc > 18) {
        return calc
    } else {
        return 'not an adult';
    }
}
    
var ages = ageCalc(years,calcuAge);
var adult = ageCalc(years,isAdult);

console.log(adult)


// Closures (function have access to outer function)

function Question(job) {
    return function (name){
        if(job == 'designer'){
           console.log(name + ' can u explain what is ui as u said u are ' + job); 
           
        }else if (job == 'teacher') {
            console.log(name + ' can u explain what is capacitor as u said u are ' + job); 
        }else {
            console.log(name + ' what do u do ?')
        }
    
}
}

var answer = Question('teacher');
answer('Immaz');
// OR

Question('designer') ('immax');


// CAll, Bind & Apply Method 

// Call (we can borrow this. from 1 object to another)

