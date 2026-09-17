let arr = [5, 4, 6, 2, 1];
//let str ="ajay";

function reverse(left, right, arr) {
    // Base condition: jab left pointer right se aage ya barabar ho jaye
    if (left >= right) {
        return;
    }
    
    // Swap logic
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    // Recursive call
    reverse(left + 1, right - 1, arr);
}

//Function call (Yahan length - 1 dena zaroori hai)
reverse(0, arr.length - 1, arr);
console.log(arr);

// fibonacci series 
// tree recursion 
// function fibo(n){
//     if(n==1 || n==2)
//         return 1; 
//     return fibo(n-1)+fibo(n-2);
// }
// console.log(fibo(5));
// time complexity -> o(2^n)
// space complexity -> o(n)

//  let arr =[1,2,3];
//    function subset(i,arr,res){
//         if(i==arr.length){
//             console.log(res);
//             return;
//         }
//     //take
//     res.push(arr[i]);
//     subset(i+1,arr,res);
//     //not take
//     res.pop();
//     subset(i+1,arr,res)
//    }
//    subset(0,arr,[]);

   let str = "ajay"
const reverseString=(i)=>{
    if(i<0){
        return "";
    }
    return str[i] + reverseString(i-1);
}
 console.log(reverseString(str.length-1));