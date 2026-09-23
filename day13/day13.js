// closure *

// Higher order function (map, filter & reduce )

// map -> map is higher order function.

// return a new array by applying the function to every item of the array.


// callback have three parameter 
// item-> curr item 
// index -> index of curr item 
// arr- original array (on which map is applied)

// function callback(item,index,arr){
//     console.log(item,index,arr);

// }

// arr.map(callback);


// Q1- double each item of the array 
// let arr =[4,3,2,1];

// //approach 1
// //double=[8,6,4,2]

// let double=[];
// for(let i=0;i<arr.length;i++){
//     double.push(2*arr[i]);
// }

// console.log(double);

// approach 2

// using map

// function callback(item,index,arr){
//    return  2*item;
// }

// let double = arr.map(callback);

// console.log(double);


// triple the item of an array and return a new array.
// let arr = [4, 3, 2, 1];


// function multipleBy3(item){
//      return item*3;
// }

// let triple=arr.map(multipleBy3);
// console.log(triple);


// using arrow function
// function multipleBy3(item){
//      return item*3;
// }

// let triple=arr.map((item)=>item*3);
// console.log(triple);


//  let prices = [5,6,7,8,9];

// // // create a new array by adding 20% gst to the prodcuts


// let priceAfterGST = prices.map((price)=>price+price*0.2);

// console.log(priceAfterGST);

//

// let students = [
//     {
//         name: "Akash",
//         score: 40,
//         age: 20,
//     },
//     {
//         name: "Vikas",
//         score: 20,
//         age: 30,
//     },
//     {
//         name: "Suyash",
//         score: 50,
//         age: 50,
//     }
// ]


// return an array containing name of the students 
// let students = [
//    "Akash",
//    "Vikas",
//    "Suyash"
// ]

// let names=students.map((student) => student.name);
// console.log(names);

// return an array containing all the student information along with 
// isEligible true or false and contition isEligible that student should greater 
// than 40 marks and age should be greater than 20;


// let transform = [
//     {
//         name: "Akash",
//         score: 40,
//         age: 20,
//         isEligible:false
//     },
//     {
//         name: "Vikas",
//         score: 20,
//         age: 30,
//         isEligible:false
//     },
//     {
//         name: "Suyash",
//         score: 50,
//         age: 50,
//         isEligible:true
//     }
// ]

// let students = [
//     {
//         name: "Akash",
//         score: 40,
//         age: 20,
//     },
//     {
//         name: "Vikas",
//         score: 20,
//         age: 30,
//     },
//     {
//         name: "Suyash",
//         score: 50,
//         age: 50,
//     }
// ]

// let transformedData = students.map((student) => {
  //  return {
        // name: student.name,
        // score: student.score,
        // age: student.age,
//         ...student,
//         isEligibile: student.score > 40 && student.age > 20,
//     }
// })


// console.log(transformedData);



//let arr = [1,2,3,4,5];

// // transform in to 
// // [
// //   [1,0],
// //   [2,1],
// //   [3,2],
// //   [4,3],
// //   [5,4]
// // ]


// let transform = arr.map((item,index)=>[item,index]);

// console.log(transform);




// filter() -> filter returns a new array containing all 
// the item for which callback function return true.

// filter return a new array containing all the item that statisfy 
// the condition of callback function.


// if callback function will return true item will added new array 
// otherwise not.

// function callback(item,index,arr){

// }

// let newArr = arr.filter(callback);



//let arr = [1, 2, 3, 4, 5];
// // return a new array consiting of only even items

// function isEven(item){
//      return item%2==0?true:false;
// }

// let even = arr.filter(isEven);

// console.log(even);


// return an array containing items greater 2.



// q5:- return an array consiting of details of only those student who 
// is greater than 20;

let students = [
    {
        name: "Akash",
        score: 40,
        age: 20,
    },
    {
        name: "Vikas",
        score: 20,
        age: 30,
    },
    {
        name: "Suyash",
        score: 50,
        age: 50,
    }
]

let transformedData = students.filter((student)=>student.age>20);
console.log(transformedData);