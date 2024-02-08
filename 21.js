'use strict'
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {   
    let result = 0;
    data.forEach(item => {        
        if (item.amount > 0) {
            result += item.amount;
        }
    });        
    return result;
};
getPositiveIncomeAmount(funds);
const getTotalIncomeAmount = (data) => {
    let result = 0;
    if (data.some(item => item.amount < 0)) {
        data.forEach(item => {        
            
                result += item.amount;
            
        });        
    }
    console.log(result);   
    return result;
};
getTotalIncomeAmount(funds);