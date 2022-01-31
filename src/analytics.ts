let logged: boolean;

function sendAnalytics(data: string): void{
    
    console.log(data);
    logged = true;
    console.log(logged);
       
}

sendAnalytics('The data')