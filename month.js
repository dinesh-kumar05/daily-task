const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line",(data) => {
    userInput.push(data);
    });
    inp.on("close", () => {
      var d = userInput[0];
     if ( d==1 || d==3 || d==5 || d==7 || d==8 || d==10 || d==12 ){
    console.log(31);
     } 
     if (d==4 || d==6 || d==9 || d== 11){
      console.log(30);
     }
     if (d==2){
         console.log(28)
     }
     });
       
