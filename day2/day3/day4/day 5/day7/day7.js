// Binary Search
// used for searcjhing 
// mostly worked on sorted array 
// let arr = [1,2,3,4,5]
// let target =4;
// function binarySearch(arr, target){
//     let l =0; r=arr.length-1;
//     while(l <= r){
//         let mid = Math.floor((l + r)/2);
//         if(arr[mid] == target)
//             return true; 
//         else if(arr[mid] > target){
//              r= mid -1;
//         }
//         else {
//             l =mid +1;
//         }
//     }
//     return false;
// }
// console.log(binarySearch(arr,target));
// best case = o(1)
// t.c avg case = o(log2(n))
// worst case = o(log2(n))
// space complexity = o(1)

// Question  
// akash and prem is working for big ecommerce company and company have inventory of 10^16 
// products and asked prem and akash to design a search functionality . Akash come with a 
// searching algorithm that takes 0(n) while prem have designed in o(log2(n)) calculate time 
// takes by  both algorithm in wors case . If 10^8 operations can be performed in one second.

 //n =10^16
 // algo 1-> o(n)
 // no of operation = 10^16
 // 1sec = 10^8 operations 
  //1 op = 1/10^8

// linear search ->o(n)
// binary search -> o(log2(n))

// binary search 
// let arr = [1, 2, 4, 4, 4, 5, 6];
// let target = 4;

// function binarySearch(arr, target) {
//     let l = 0;
//     let r = arr.length - 1;
//     let ans = -1;

//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);

//         if (arr[mid] === target) {
//             ans = mid;
//             r = mid - 1;
//         } else if (arr[mid] > target) {
//             r = mid - 1;
//         } else {
//             l = mid + 1;
//         }
//     }

//     return ans;
// }

// console.log(binarySearch(arr, target));


// last occurrence

let arr = [1, 2, 4, 4, 4, 5];
let target = 4;

function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            ans = mid;
            l = mid + 1; // move right to find the last occurrence
        } else if (arr[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return ans;
}

console.log(binarySearch(arr, target));

// HW = LowerBound problem and upperbound problem  

// map and set
// map = map stores key and value pair 
// key is unique
// preserver insertion order 

// creating map
// let mp = new Map();

// set get size clear remove 
// set -> insertion and updation 
// get -> to access item 
// clear -> to clear 
// remove -> to remove a item 
// maintain name and marks of a class 
let mp = new Map();
mp.set("abhishek",30);
mp.set("prem", 35);
mp.set("akash", 32);
// key can not be duplicate 
mp.set("akash",40);
// mp.get(key) -> retun the value
console.log(mp.get("prem"));

// mp.clear()
mp.clear();
console.log(mp);
// mp.delete(key)-> delete the key and return true 
// if key is deleted otherwise false 
// console.log(mp.delete("prem"));
// console.log(mp.delete("tarun"));
// mp.clear()
