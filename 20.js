'use strict'
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

function showGoodFilms(arr) {
    console.log(JSON.stringify(arr));
    const goodFilms = arr.filter(function(item) {
        return item.rating >= 8;
    });
    console.log(typeof(goodFilms));
    return goodFilms;
}
showGoodFilms(films);

function showListOfFilms(arr) {
    const res = arr.reduce(function(sum, current) {        
            return `${sum}, ${current.name}`;
        }, '').slice(2);  
    
    
    return res;
}


function setFilmsIds(arr) {
    console.log('start');
    console.log(typeof(arr));
    let results = arr.map(function(currentValue, index, arr) {
        currentValue.id = index;       
        return currentValue;
    });
    console.log('???------------------------');
    console.log(results);
    return results;
//     let newArr  = Object.entries(results);
//     console.log('------------------------');
//     console.log(newArr);
}

const tranformedArray = setFilmsIds(films);
console.log('result = ');
console.log(tranformedArray);

function checkFilms(arr) {
    return arr.every(item => item.id !== null); 
}
checkFilms(tranformedArray);