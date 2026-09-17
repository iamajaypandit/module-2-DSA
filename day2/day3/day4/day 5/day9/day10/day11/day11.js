// sorting 
// selection sort 
// bubble
//nerge 
//quick 
//insertion all are comparison sort 
// pick minimum from  unsorted part and start placing it from the start
//sort the array by using selection sorting
//let arr = [5, 4, 1, 2];

// for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIndex]) {
//             minIndex = j;
//         }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
// }
// console.log(arr);

//approach 2 
// let arr =[5,6,3,2,8,4,1];
// for(let i =0; i<arr.length; i++){
//     let minIndex=i;
//     let minItem =arr[i];
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j]<minItem){
//             minIndex=j;
//             minItem=arr[j];
//         }
//     }
//     let temp =arr[i];
//     arr[i]=arr[minIndex];
//     arr[minIndex]=temp;
// }
// console.log(arr);
// time complexity ->o(n^2)
//space complexity -> 0(1)
// stable

// Bubble sort 
// let arr = [11,3, 4, 1,8, 7, 2,9];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//     }
// }
// console.log(arr);

// approach 2
//  let arr =[5,2,9,10,44,56,33,25,776,76]
// for (let i = 0; i < arr.length-1; i++) {
//     for (let j = 0; j < arr.length-i-1; j++){
//              if(arr[j+1]<arr[j]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//       }
//     }
//     if(isSwapped==false){
//         break;
//     }
// }
// console.log(arr); 
// time complexity 
// best case -> o(n)(when array is already sorted)
// avg case -> o(n^2)
// worst case -> o(n^2)


// sort the array in desecnding oredr using bubble sort and selection sort 
// selection sort
// let arr =[5,6,3,2,8,4,1];
// for(let i =0; i<arr.length; i++){
//     let minIndex=i;
//     let minItem =arr[i];
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j]>minItem){
//             minIndex=j;
//             minItem=arr[j];
//         }
//     }
// swap
// [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
// }
// console.log(arr);


// bubble sort for decreasing order
//  let arr =[5,2,9,10,44,56,33,25,776,76]
// for (let i = 0; i < arr.length-1; i++) {
//     for (let j = 0; j < arr.length-i-1; j++){
//              if(arr[j+1]>arr[j]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//       }
    // }
    // if(isSwapped==false){
    //     break;
    // }
//  }
// }
// console.log(arr); 

// swaping withoiut using third variable


//insertion sorting

let arr=[4,3,1,6,7];

for(let i =1; i<arr.length; i++){
let key =arr[i];

}



// t.c -> 
//best case->o(n)