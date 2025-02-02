 function display(sum){
    console.log(sum);
 }
 function calculateSum(a,b,myCallback){
    let sum = a+b;
    myCallback(sum);
 }
 calculateSum(7,8,display)