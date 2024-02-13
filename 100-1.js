'use strict';

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`User's name: ${this.name}, user's age: ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Incorrect incoming value');
        }
    };
}

const ivan = new User('Ivan', 27);

console.log(ivan.name);
console.log(ivan.getAge()); 

ivan.setAge(666);
ivan.name = 'Alex';

ivan.say();
