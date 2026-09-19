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


// insertion sort ->
// let arr =[4,3,1,6,7];
// // [7,6,4,3,1]


// for(let i=1;i<arr.length;i++){
//     let key = arr[i];
//     let j=i-1;
//     while(j>=0 && key>arr[j]){
//         arr[j+1]=arr[j];
//         j--;
//     }
//     arr[j+1]=key;
// }

// console.log(arr);

// T.c -> 
// Best Case -> o(n) //when array is already sorted 
// Average Case-> o(n^2)
// Worst Case -> o(n^2)

// Space Complexity ->o(1)

// Merge sort

// given two sorted merge array them in a new sorted array 
let arr1=[5,6,7,8];
let arr2=[7,8,9];
let first = 0, second = 0;
    let res = [];
    while (first < arr1.length && second < arr2.length) {
        if (arr1[first] < arr2[second]) {
            res.push(arr1[first]);
            first++;
        } else {
            res.push(arr2[second]);
            second++;
        }
    }

    while (first < arr1.length) {
        res.push(arr1[first]);
        first++;
    }

    while (second < arr2.length) {
        res.push(arr2[second]);
        second++;
    }
    console.log(res);


    // t.c-> o(n+m)
    // s.c-> o(n+m)

    // merge sort 
    
// Merge Sort
let arr = [5,4,3,6,8];

function merge(l,mid,r,arr){
    let arr1 = arr.slice(l,mid+1);
    let arr2 = arr.slice(mid+1,r+1);

    let i=0,j=0;
    let n=arr1.length,m=arr2.length;
    let res=[];

    while(i<n && j<m){
        if(arr1[i]<=arr2[j]){
           res.push(arr1[i]);
           i++;
        }else{
            res.push(arr2[j]);
            j++;
        }
    }

    while(i<n){
        res.push(arr1[i]);
        i++;
    }

    while(j<m){
        res.push(arr2[j]);
        j++;
    }


   for(let k=0;k<res.length;k++){
      arr[l+k]=res[k];
   }


}

function mergeSort(l,r,arr){
      if(l>=r){
       return;
      }
      let mid = Math.floor((l+r)/2);
      mergeSort(l,mid,arr);
      mergeSort(mid+1,r,arr);
      merge(l,mid,r,arr);
}

mergeSort(0, arr.length-1, arr);

console.log(arr);                   

// time complexity ->  o(nlogn)
// space complexity -> o(n)