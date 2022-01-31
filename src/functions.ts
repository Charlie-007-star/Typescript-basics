/* --------------------- Funtion return Types and voids --------------------- */

function add(n1: number,n2: number): number{
    return n1+n2;
}

function printResult(num: number): void{
    console.log('Result is :'+ num);
}

function addAndHandle(n1:number,n2:number,cb: (num: number)=> void){

    const result = n1+n2;
    cb(result);
}

let someVariable: (n1:number,n2:number)=> number;
someVariable = add;
console.log(someVariable(2,3));

printResult(add(5,5));

addAndHandle(10,20,(result)=> {
    console.log(result);    
});