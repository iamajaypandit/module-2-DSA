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

// let transformedData = students.filter((student)=>student.age>20);
// console.log(transformedData);


// const employees = [
//   {
//     employeeId: "EMP001",
//     name: "Aarav Sharma",
//     gender: "Male",
//     department: "IT",
//     jobTitle: "Software Engineer",
//     location: "Pune",
//     salary: 850000,
//     joiningDate: "2022-06-15",
//     experience: 4,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP002",
//     name: "Ananya Patel",
//     gender: "Female",
//     department: "HR",
//     jobTitle: "HR Executive",
//     location: "Mumbai",
//     salary: 650000,
//     joiningDate: "2023-01-10",
//     experience: 3,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP003",
//     name: "Rohan Mehta",
//     gender: "Male",
//     department: "Finance",
//     jobTitle: "Financial Analyst",
//     location: "Pune",
//     salary: 780000,
//     joiningDate: "2021-08-22",
//     experience: 5,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP004",
//     name: "Priya Singh",
//     gender: "Female",
//     department: "IT",
//     jobTitle: "Senior Software Engineer",
//     location: "Bangalore",
//     salary: 1250000,
//     joiningDate: "2020-03-18",
//     experience: 6,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP005",
//     name: "Kabir Joshi",
//     gender: "Male",
//     department: "Sales",
//     jobTitle: "Sales Executive",
//     location: "Delhi",
//     salary: 720000,
//     joiningDate: "2023-07-05",
//     experience: 3,
//     status: "Active"
//   },
// ];

// return a new array cnsisting of emploee details whose salary is greater 100000
//let filtereddata = employees.filter((employee)=> employee.salary>100000)
//console.log(filtereddata);

// return a neew array consisting of employees names whose salary is greater 100000
//   let filtereddata = employees.filter((employee) => employee.salary > 100000)
//   let names = filteredname.map((employee)=> employee.name);
//   console.log(names);


// reduce
// let arr = [4,5,6,7,8];
// function callback(accum,curr){
//     console.log(accum,curr);
//     return curr*accum;
// }
// let finalValue = arr.reduce(callback,1);
// console.log(finalValue);

// // approach 2
// function product(accum,curr){
//     return accum*curr;
// }
// let mul = arr.reduce(product,1);
// console.log(mul);

// find total salary of the employees
const employees = [
  {
    employeeId: "EMP001",
    name: "Aarav Sharma",
    gender: "Male",
    department: "IT",
    jobTitle: "Software Engineer",
    location: "Pune",
    salary: 850000,
    joiningDate: "2022-06-15",
    experience: 4,
    status: "Active"
  },
  {
    employeeId: "EMP002",
    name: "Ananya Patel",
    gender: "Female",
    department: "HR",
    jobTitle: "HR Executive",
    location: "Mumbai",
    salary: 650000,
    joiningDate: "2023-01-10",
    experience: 3,
    status: "Active"
  },
  {
    employeeId: "EMP003",
    name: "Rohan Mehta",
    gender: "Male",
    department: "Finance",
    jobTitle: "Financial Analyst",
    location: "Pune",
    salary: 780000,
    joiningDate: "2021-08-22",
    experience: 5,
    status: "Active"
  },
  {
    employeeId: "EMP004",
    name: "Priya Singh",
    gender: "Female",
    department: "IT",
    jobTitle: "Senior Software Engineer",
    location: "Bangalore",
    salary: 1250000,
    joiningDate: "2020-03-18",
    experience: 6,
    status: "Active"
  },
  {
    employeeId: "EMP005",
    name: "Kabir Joshi",
    gender: "Male",
    department: "Sales",
    jobTitle: "Sales Executive",
    location: "Delhi",
    salary: 720000,
    joiningDate: "2023-07-05",
    experience: 3,
    status: "Active"
  },
];

// find total salary of the employees
// function totalSalary(accum,curr){
//     return accum+curr;
// }
// let totalSalary = employees.reduce(sum,0);
// console.log(sum);

// function totalsalary(accum,curr){
//    return  accum+curr.salary
// }
// let totalsalary = employees.reduce(totalsalary,0);
// console.log(totalsalary);
// find the no of employees in IT department
// const noOfITEmployees = employees.reduce((count, employee) => {
//   return employee.department === "IT" ? count + 1 : count;
// }, 0);

// console.log("Number of employees in IT department:", noOfITEmployees);

//
// function employeesInIT(count,curr){
//     count++;
//     return count;
// }
// let total = employees.reduce(employeesInIT,0);
// console.log(total);

// find the number of employes working in pune
// function employeesInPune(count,curr){
// if(curr.location=="Pune")
//       count++;
//     return count;
// }
// let total =  employees.reduce(employeesInPune,0);
// console.log(total);

// find the name of all the employees who is working in pune
const delhiEmployees = employees.reduce((names, employee) => {
  if (employee.location === "Delhi") {
    names.push(employee.name);
  }
  return names;
}, []);

console.log(delhiEmployees);

// let filteredname=employeesmap((employee)=>employee.location="Delhi");
// let names = filteredname.map((employee)=>employee.name);
// console.log(employees);