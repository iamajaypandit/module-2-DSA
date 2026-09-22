// Quick Sorting 
let arr = [5, 4, 6, 7, 1, 2];

function partitionIndex(arr, l, high) {
    let pivot = arr[high];
    let i = l - 1;

    for (let j = l; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, l, r) {
    if (l >= r) return;

    let index = partitionIndex(arr, l, r);
    quickSort(arr, l, index - 1);
    quickSort(arr, index + 1, r);
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);

// time complexity
// best case -> O(n log2(n))
// worst case -> O(n^2)
// average case -> O(nlog2(n))
// space complexity -> 
// best case ->O(nlog2(n))
// average case ->O(nlog2(n))
// worst case -> o(n)

// let arr = [5, 4, 6, 7, 1, 2];

// function partitionIndex(arr, l, high) {
//     let pivot = arr[high];
//     let i = l - 1;

//     for (let j = l; j < high; j++) {
//         if (arr[j] <= pivot) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }

//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     return i + 1;
// }

// function quickSort(arr, l, r) {
//     if (l >= r) return;

//     let index = partitionIndex(arr, l, r);
//     quickSort(arr, l, index - 1);
//     quickSort(arr, index + 1, r);
// }

// quickSort(arr, 0, arr.length - 1);
// console.log(arr);



// arrow function -> shorter way of writing functions in javascript
// function add(a,b){
//     console.log(a+b);
// }
// add(5,8);

// const multiply = (a,b) =>a*b;
// console.log(multiply(4,8));

// const subtract = (c,d)=> c-d;
// console.log(subtract(25,9));

// Note -> functions in js is first class citizen. 
// function can be stored variable can be passed in another as argument

// callback functions -> function that is passed to another 
// function as an argument is known as callback function.

function delivery() {
    console.log("item is sent for delivery");
}

function placeholder(status, callback) {
    if (status === "successful") {
        callback();
    } else {
        console.log("Order not successful");
    }
}

placeholder("successful", delivery);


// arrow function as a callback
const multiply = (a, b) => {
    return a * b;
}

const add = (a, b)=> {
    return a + b;
}

const sub = (a,b)=> {
    return a -b;
}
function calculate(a, b, operation) {
    console.log(operation(a, b));
}

calculate(8, 9, multiply);
calculate(5, 7, add);
calculate(10, 5, sub);


// functions can be returned frommanother function 
// function buy(){
//     return function payment(){
//         console.log("payement is being processed");
//     }
// }
// console.log(buy());

// const process = buy();
// process();
// buy()();
// [Function: payment]
// payement is being processed
// payement is being processed

function buy(){
    return function payment(){
        return function delivery(){
        console.log("item is being dlivered");
    }
}
}
console.log(buy());
console.log(buy()());
buy()()();
// [Function: payment]
// [Function: delivery]
// item is being dlivered

// Hingh Ordrer function -> 