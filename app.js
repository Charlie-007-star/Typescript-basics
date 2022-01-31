/* ------------------------------- Union Types ------------------------------ */
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if(resultType === 'as-number') {
    //     console.log("as-number: ");
    //     return +result;
    // }
    return result;
}
var combinedAges = combine(30, 20, 'as-string');
console.log(combinedAges);
var numberConvert = combine('30', '20', 'as-number');
console.log(numberConvert);
var combineNames = combine('Max', 'Anna', 'second');
console.log(combineNames);
