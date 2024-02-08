'use strict'

// FILTER

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames); // выводит новый массив с элементами для которых менее 5 символов

// MAP

const answers = ['IvAn', 'AnnA', 'Hello'];

const results = answers.map(item => item.toLowerCase());

console.log(results); // трансформирует старый массив в имена в нижнем регистре и записывает в новый

// EVERY/SOME

const some = [4, 'asdf', 'rewyrw']; 
console.log(some.some(item => typeof(item) === 'number')); // вернет true если хотя бы один элемент подходит под условие

console.log(some.every(item => typeof(item) === 'number')); // вернет true если все элементы подходят под условие

// REDUCE

const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current);  // складывает элементы массива

console.log(res);

// 
const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};
const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);

console.log(newArr);

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

// function showGoodFilms(arr) {
//     const goodFilms = arr.filter(function(item) {
//         return item.rating >= 8;
//     });
//     console.log(goodFilms[0]);
    
// }
// showGoodFilms(films);

// function showListOfFilms(arr) {
//     console.log(arr);
//     const res = arr.reduce(function(sum, current) {        
//             return `${sum} , ${current.name}`;
//         }, ''); 
//     console.log(res.slice(3));    
// }
// showListOfFilms(films);


function setFilmsIds(arr) {
    const results = arr.map(function(currentValue, index) {
        console.log(currentValue);
        currentValue.Id = index;
        return currentValue;
    });
    console.log(typeof(results));
}
setFilmsIds(films);

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    
}