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