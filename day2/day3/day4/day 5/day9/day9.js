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
//  function total(n){
//     if(n==0){
//         return;
//  }
// return n+total(n-1);
//  }
//  console.log(total(5));
// time complexity -> o(n)
// space complexity -> o(n)
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
// let n =1234;
// function sumOfDigits(n, sum){
//     if(n==0){
//         console.log(sum);
//         return;
//     }
//     sum+=n%10;
//     sumOfDigits(Math.floor(n/10),sum);
// }
// sumOfDigits(n,0);
 //time complexity -> o(log10(n))
 // space complexity -> o(log10(n))

const { reverse, arr } = require("./day10");

 // find the maximum item of array by using recursion 
 //approach 2
 //let arr=[1,2,8,4,5,87];
// function findMax(arr,i,ans){
//     if(i==arr.length){
//         console.log(ans);
//         return;
//     }
//     if(arr[i]>ans)
//         ans=arr[i];
//     findMax(arr, i+1, ans);
// }
// findMax(arr,0,-Infinity);


// approach 3
// function findMax(arr,i,ans){
//     if(i==arr.length){
//         return ans;
//     }
//     if(arr[i]>ans)
//         ans=arr[i];
//     return findMax(arr,i+1, ans);
// }
// console.log(findMax(arr,0,-Infinity));
// time complexity -> o(n)
// space complexity -> o(n)

// check if an array is sorted or not by using recursion and return true and false 
// when sorted ture and when not sorted return false 
// function isSorted(arr, i = 0) {
//     if (i >= arr.length - 1) {
//         return true;
//     }
//     if(arr[i]>arr[i+1]){
//         return false;
//     }
//     return isSorted(arr, i+1);
// }
// console.log(isSorted([1,2,3,4]));
// approach 2
// let arr =[1,2,3,4,6];
// function isSorted(arr,i){
//     if(i==arr.length)
//         return true;
//     if(arr[i]<arr[i-1])
//         return false;
//     return isSorted(arr, i+1);
// }
// console.log(isSorted(arr,1));

// check if a string is palindrome or not using recursion 
// let str = "rar";
// function isPalindrome(str,left ,right){
//  if(right<left)
//     return true;
// if(str[left]!==str[right]){
//     return false;
// }
// return isPalindrome(str,left+1,right-1);
// }
// console.log(isPalindrome(str,0,str.length-1));
// find the prime number from 1 to n using recursion 
// let n =20;
// function isPrime(number, divisor = 2) {
//     if (number < 2) {
//         return false;
//     }
//     if (divisor * divisor > number) {
//         return true;
//     }
//     if (number % divisor === 0) {
//         return false;
//     }
//     return isPrime(number, divisor + 1);
// }

// function findPrime(number, limit) {
//     if (number > limit) {
//         return;
//     }
//     if (isPrime(number)) {
//         console.log(number);
//     }
//     findPrime(number + 1, limit);
// }

// findPrime(1, n);

// printing decending order from n to 1

// function Dec(n){
//     if(n==1){
//         return;
// }
//  console.log(n);
//     Dec(n-1);
// }
// Dec(10);

// increasing order 
// function Inc(n){
//     if(n==0){
//         return;
//     }
//     Inc(n-1);
//     console.log(n);
// }
// Inc(10);

//  let n =5;
//  function factorial(fact,n){
//     if(n==0){
//         console.log(fact);
//         return;
//     }
//     fact*=n;
//     factorial(fact,n-1);
//  }
//  factorial(1,5);
 // print sum of n 
//  function total(n){
//     if(n==1){
//         return 1;
//  }
// return n+total(n-1);
//  }
//  console.log(total(5));

// printing fibonacci series
// function fib(n,a =0,b =1){
//     if(n<=1){
//         return n;
//     }
//     return fib(n-1) + (n-2);
// }
// console.log(fib(6));

// const reverseArray = (arr, n, ans) => {
//     if (n < 0) {
//         console.log(ans.join(","));
//         return;
//     }
//     ans.push(arr[n]);
//     return reverseArray(arr, n - 1, ans);
// }
// let arr = [1,5,3,4,5];
// reverseArray(arr,arr.length-1,[]);


function printArrayRecursive(arr, i, n) {
  if(i==n){
    console.log(arr.join(" "));
    return;
  }
  printArrayRecursive(arr,i+1,n);
}
let arr = [1,2,3,4];
printArrayRecursive(arr,0,arr.length);