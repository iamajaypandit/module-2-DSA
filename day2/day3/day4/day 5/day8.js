// map is implemented hash table 
// time complexity 
// best =o(1)
// avg= o(1)
// worst =o(n)
// store the data of class in which there are n students 
// name and marks of the student is given 
// design a efficient search functionality 
// to search the marks of the student by their name 
// n=5;
// let mp = new Map();
// mp.set("abhi",30);
// mp.set("abh",40);
// mp.set("abi",50);
// mp.set("ahi",20);
// mp.set("bhi",60);
// console.log(mp.get("abhi")); //-> o(1)
// // iterating a map 
// for(let property of mp){
//     console.log(property[0], property[1]);
// }

// //
// for(let [key,value] of mp){
//     console.log(key,value);
// }

// find the frequency of each element 
// let arr =[1,2,3,4,4,5,5];
// let mp = new Map();
// for(let item of arr){
// if(mp.has(item)==false){
//     mp.set(item,1);
// }
// else{
//     let prevFreq= mp.get(item);
//     mp.set(item,prevFreq+1);
//   }
// }
// for(let [key,value] of mp){
//     console.log(key+" - ",value);
// }
// time complexity -> o(n)
//space complexity -> o(n)

// creating a map from array 
// let mp =new Map([
//     [1,2],
//     [2,3],
//     [4,5]
// ])
// for(let[key,value] of mp){
//     console.log(key,value);
// }
// key of the map can be anything 
// object
// array
// string
// number 
// symbol

// set -> stores only keys 
// key can not be duplicate 
//let set = new Set();
//add= insert item =o(1)
//has= checks item exists or not
//delete= delete a key and return true if deleted successfully -> 0(1)
//size =return the size=o(1)
//clear = clear the set =o(n)

// time complexity
// best =o(1)
// avg = o(1)
//worst = o(n)

//set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);
// set.add(6);
//  console.log(set);
//  console.log(set.size);
//  console.log(set.delete(3))
//  set.clear();
//  console.log(set);
// convert array into the set 
// let st = new Set([1,2,3,4])
// console.log(st);

// for(let item of st){
//     console.log(item);
// }

// print unique item of an array
// let arr =[8,8,2,3,4,5,5,5];
// let st=new Set();
// for(let item of arr){
//     st.add(item);
// }
// console.log(st);
// // approach 2
//  let unique = new Set();
//  for(let item of arr){
//     if(unique.has(item)==false){
//         unique.add(item);
//     }
//  }
//  for(let item of unique){
//     console.log(item);
//  }
 // time complexity = o(n)
 // space complexity =o(n)
 // given an array check if array contains duplicate 
//  let arr = [1,2,2,3,4,4];
//  function containduplicates(arr){
//     let st = new Set();
//     for(let i =0; i<arr.length; i++){
//         if(st.has(arr[i])){
//             return true;
//         }
//         st.add(arr[i]);
//     }
//     return false;
//  }
//  console.log(containduplicates(arr));
 // T.c = o(n)
 // S.c = o(n)

 // question 
//  let arr =[
//     {
//         name:"ajay",
//         city:"lucknow"
//     },
//     {
//         name:"abhi",
//         city:"pune"
//     },
//     {
//         name:"adit",
//         city:"delhi"
//     },
//     {
//         name:"ankit",
//         city:"lucknow"
//     }
//  ]
 // group by city
 //let mp = new Map();
//  for(let item of arr){
//   if(mp.has(item.city)==false){
//     mp.set(item.city,[item.name]);
//   }
//   else{
//     let names=mp.get(item.city);
//     names.push(item.name);
//     mp.set(item.city,names);
//   }
//  }
//  console.log(mp);

 // HW 

 // given two array print true if there is common item between the both arrays
 // otherwise print false
//  let arr1 = [2,3,4,5];
//  let arr2= [4,5,2,6];
//  function containsDuplicate(arr1, arr2){
//  let set =new set();
//  for(let item of arr2){
//     st.add(item);
//  }
//  for(let i =0; i<arr1.length; i++){
//     if(st.has(arr1[i])){
//         return true;
//      }
//    }
// return false;
//  }
//  console.log(containsDuplicate(arr1,arr2));
 // Time Complexity = o(n+m)
 

 // Recursion - function call itself
 // tail
 //head 
 //tree

 function print1toN(n){
    if(n<1) return;
    print1toN(n-1);
    console.log(n);
 }
 print(5);



