/* ------------------------------- Union Types ------------------------------ */
function combine(input1: number | string,input2: number | string,resultType: string) {

    let result: number | string;

    if(typeof input1 === 'number' && typeof input2 === 'number') {

         result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }

    if(resultType === 'as-number') {
        console.log("as-number: ");
        return +result;
    }else{
        return result.toString();
    }
    
}

const combinedAges = combine(30,20,'as-string');
console.log(combinedAges);  

const numberConvert = combine('30','20','as-number');
console.log(numberConvert);


const combineNames = combine('Max', 'Anna','second');
console.log(combineNames);
