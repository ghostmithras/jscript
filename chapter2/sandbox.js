/*let age = 25;
let year = 2019;

// log things to console
console.log(age, year);

age = 30;

console.log(age);

const points = 100;

console.log(points);

var score = 75;

console.log(score);*/

/*
// strings
console.log('Hello World');

let email = 'mario@thenetninja@co.uk';

console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
result = email.lastIndexOf('n');
console.log(result);

result = email.slice(0, 5);
console.log(result);

result = email.substr(6, 6);
console.log(result);

result = email.replace('m', 'w');
console.log(result);

result = email.replace('n', 'w');
console.log(result);
*/

/*
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operations + - * / ** %

console.log(10 / 2);
let result = radius % 3;
console.log(result);
result = pi * radius ** 2;
console.log(result);

// order of operations - BEDMAS

result = 5 * (10 - 3) ** 2;
console.log(result);

let likes = 10;
likes++;
console.log(likes);
likes--;
console.log(likes);
likes += 10;
console.log(likes);
likes *= 2;
console.log(likes);
likes -= 10;
console.log(likes);
likes /= 3;
console.log(likes);

// NaN

console.log(5 / 'hello');
console.log(5 * 'hello');

result = 'the blog has ' + likes + ' likes.'
console.log(result);
*/

/*
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(result);

// template string way
result = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result);

// creating html templates
let html = `<h2>${title}</h2> <p>by ${author}</p> <span>This blog has ${likes} likes.</span>`;
console.log(html);
*/

/*
let fighters = ['ken', 'ryu', 'chun-li'];
console.log(fighters[1]);
fighters[1] = 'dan';
console.log(fighters[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(fighters.length);

// array methods
let result = fighters.join(',');
console.log(result);
result = fighters.indexOf('chun-li');
console.log(result);
result = fighters.concat('cammy', 'bison');
console.log(result);
result = fighters.push('ryu');
console.log(fighters);
result = fighters.pop();
console.log(fighters);
*/

/*
let age = null;
console.log(age, age + 3, `The age is ${age}`);

// booleans and comparisons
console.log(true, false, 'true', 'false');

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let result = email.includes('!');
console.log(result);

result = names.includes('luigi');
console.log(result);

// comparison operators
age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age != 25);
console.log(age < 20);
console.log(age > 20);
console.log(age <= 20);
console.log(age >= 20);

let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name > 'Crystal');

// loose comparison

age = 25;

console.log(age == 25);
console.log(age == '25');

// strict comparison

console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');
*/

// type conversion
let score = '100';
console.log(typeof score);
console.log(score + 1);

score = Number(score);
console.log(typeof score);
console.log(score + 1);

score = String(50);
console.log(typeof score);
console.log(score);
