"use strict";
function combine(input1, input2, resultType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 20, 'as-number');
console.log(combinedAges);
const numberConvert = combine('30', '20', 'as-number');
console.log(numberConvert);
const combineNames = combine('Max', 'Anna', 'as-string');
console.log(combineNames);
