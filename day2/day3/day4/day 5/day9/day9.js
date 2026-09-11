 // Recursion - function call itself
 // tail
 //head 
 //tree

 // head recursion

//  function print(sum){
//     if(n==0)
//     return;
// print(n-1);
// console.log(n);
//  }
//  print(5);

 // print sum of n 
//  function total(n,sum){
//     if(n==0){
//         return;
//  }
//  //console.log(n);
//  sum +=n;
//  total(n-1, sum);
//  }
//  total(5,0);
 //  find the factorial of a number using recursion
 
//  let n =5;
//  function factorial(fact,n){
//     if(n==1){
//         console.log(fact);
//         return;
//     }
//     fact*=n;
//     factorial(fact,n-1);
//  }
 //factorial(1,5);

 // find the sum of digits 
//  let n =121;
//  function Sumofdigits(n,sum){
//      if(n==0){
//         return 0;
//  }
// return (n%10) + Sumofdigits(Math.floor(n/10))
//  }
// console.log(Sumofdigits(n));
 //approachh 2
let n =1234;
function sumOfDigits(n, sum){
    if(n==0){
        console.log(sum);
        return;
    }
    sum+=n%10;
    sumOfDigits(Math.floor(n/10),sum);
}
sumOfDigits(n,0);
 