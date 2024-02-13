'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }    
    #surname = 'Ivanov';

    say = () =>  {
        console.log(`User's name: ${this.name} ${this.#surname}, user's age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Incorrect incoming value');
        }
    }

    get surname () {
        return this.#surname;
    }
    set surname (surname) {
        this.#surname = surname;
    }
}

const ivan = new User('Ivan', 27);
ivan.surname = 'Petrov';
console.log(ivan.surname);
ivan.say();
