// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('The user logged in.');
    },
    logout: function(){
        console.log('The user logged out.');
    },
    logblogs: function(){
        //console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

/*
console.log(user);
console.log(user.name);

console.log(user.age);
user.age = 35;
console.log(user.age);

const key = 'location';

console.log(user[key]);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);
*/

/*
user.login();
user.logout();

user.logblogs();
*/