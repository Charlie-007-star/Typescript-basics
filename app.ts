function add(a: number,b: number,printResult: boolean,phrase: string){

    let result:number = a + b;
    if(printResult){
        console.log(phrase+result);
    }else{
        return a+b;
    }
}

const a = 5;
const b = 5.5;
const printResult = true
const phrase = "Result is: "
 
add(a,b,printResult,phrase);


