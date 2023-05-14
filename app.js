function helloMyName(nameOfPerson){
    console.log("Hello, my name is " + nameOfPerson + ".");
}

helloMyName("Nate");
helloMyName("Miklos");
helloMyName("Grace");
helloMyName("David");
helloMyName("Michael");
helloMyName("Cindy");

function plus (firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}

function devide (a, b) {
    console.log(a/b);
}

plus(8, 60);
devide(24, 6);

const player = {
    name: "nate",
    sayHello: function(otherPersonsName){
        console.log("Hello " + otherPersonsName + ". " + " Nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("Miklos");
player.sayHello("Grace");

function plus (men, women){
    console.log(men + women);
}

plus(4,5);

const calculator = {
    plus: function(a,b) {
       return a + b;
    },

    minus: function(a,b) {
        return a - b;
    },

    times: function(a,b) {
        return a * b;
    },

    divide: function(a,b) {
        return a / b;
    },

};

const plusResult = calculator.plus(5,1);
const minusResult = calculator.minus(plusResult,1);
const timesResult = calculator.times(1, minusResult);
const divideResult = calculator.divide(plusResult, timesResult);




const age = 38;
function calculateKrAge(ageOfForeigner) {
   return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);