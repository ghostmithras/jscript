/*
// function expression
const speak = function(){
    console.log("Good Day")
};

greet();
speak();

// function declaration
function greet(){
    console.log("Hello there.");
}
*/

// arguments and parameters

/*
function speak(name = 'luigi', time = 'Good day'){
    console.log(`Good ${time}, ${name}`);
}

speak()
speak('mario', 'morning')

function calcArea(radius){
    return 3.14 * radius ** 2;
}

const area = calcArea(5);
console.log(area);
*/

/*
calcArea = radius => 3.14 * radius ** 2;

console.log("Area is: " + calcArea(5));
*/

// Callback and For Each
function myFunc(callbackFunc){

    let value = 50;
    callbackFunc(value);

}

myFunc(function(value){
    console.log(value);
})

let people = ['mario', 'luigi', 'shaun', 'ryu', 'chun-li'];

people.forEach(function(person, index){
    console.log(index, person);
});