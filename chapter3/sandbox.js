// for loops
/*
for(let i = 0; i < 5; i++){
    console.log('in loop:' + i);
}

console.log("loop finished");

const names = ['mario', 'luigi', 'toad'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);

    let html = '<div>${names[i]}</div>';
    console.log(html);
}
*/

/*
const names = ['mario', 'luigi', 'toad'];

let i = 0; 

while(i < names.length){
    console.log(names[i]);

    let html = '<div>${names[i]}</div>';
    console.log(html);

    i++;
}
*/

/*
const names = ['mario', 'luigi', 'toad'];

let i = 5; 

do{
    console.log(names[i]);

    let html = '<div>${names[i]}</div>';
    console.log(html);

    i++;
}
while(i < names.length){

}
*/

/*
const age = 20;

if(age > 20){
    console.log("You are over 20");
}

const fighters = ['ryu', 'ken', 'chun-li', 'cammy'];

if(fighters.length > 3){
    console.log("that's a big roster");
}

const password = 'pass';

if(password.length >= 12){
    console.log('That password is strong.');
}
else if(password.length >= 8){
    console.log('That password is long enough.');
}
else{
    console.log('That password is too short');
}*/

// logical operators - OR || AND &&

/*
const password = '@';

if(password.length >= 12 && password.includes('@')){
    console.log('That password is strong.');
}
else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('That password is strong enough.');
}
else{
    console.log('That password is too weak');
}*/

/*
let user = false;

if(!user){

}

console.log(!true);
console.log(!false);*/

// break and continue

/*
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('Your score: ' + scores[i]);

    if(scores[i] === 100){
        console.log('Congrats, top score');
        break;
    }

}
*/

/*
// switch statements
// uses ===

grade = 'D';

switch(grade){
    case 'A':
        console.log("You got an A");
        break;
    case 'B':
        console.log("You got an B");
        break;
    case 'C':
        console.log("You got an C");
        break;
    case 'D':
        console.log("You got an D");
        break;
    case 'F':
        console.log("You got an E");
        break;
    default:
        console.log("Not a valid grade");
}

// using if statements
if(grade = 'A'){

}
else if(grade = 'B'){

}
else if(grade = 'C'){

}
else if(grade = 'D'){

}
else if(grade = 'E'){

}
else{

}*/

// variable and block scope
let age = 30;

if(true){
    let age = 40;
    let name = 'shaun';
    console.log('inside 1st code block: ' , age, name);
}

if(true){0
    console.log('inside 2nd code block: ' , age);
}

console.log('outside code block: ' , age, name);

