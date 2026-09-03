
// // 2D aaray 
// // arr[row][col]

// let arr =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// // print no ofcolumns and rows
// let rows = arr.length;
// let cols = arr[0].length;
// console.log("Rows:", rows);// console.log(arr.length);
// console.log("Columns:", cols);


// // irregular 2d arrays
// let arr = [
//     [1,2,3,4],
//     [2,3,4,5,6,10],
//     [7,8,9,10,11]
// ]

// console.log(arr);
// console.log(arr[1][4]); //3
// print all the iems of the array
// for(let i =0; i<arr.length; i++){
//     for(let j =0; j<arr[i].length; j++){
//         console.log(arr[i][j]," ",j);
//        console.log(arr[i][j]);
//     }
// }

// if 2d arr is irregular then how can be acess all the items of the array 
// for(let i =0; i<arr.length; i++){
//     for(let j =0; j<arr[i].length; j++){
//         console.log(arr[i][j]," ",j);
//     }
// }
// // find numbers of items in first row
// console.log("Number of items in first row:", arr[0].length);    
// console.log("Number of items in second row:", arr[1].length);
// console.log("Number of items in third row:", arr[2].length);
// // find the items of columns in the array
// for(let i =0; i<arr.length; i++){
//     for(let j =0; j<arr[i].length; j++){
//         console.log(arr[i][j]," ",j);
//        console.log(arr[i][j]);
//     }
// }
// // find the numbers of items in the columns of the array
// for(let i =0; i<arr.length; i++){
//     console.log("Number of items in row", i, ":", arr[i].length);
// }


// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ]

// // print the 2d array rowwise right to left

// for (let i = 0; i < arr.length; i++){
//     let row ="";
//     for(let j = arr[i].length -1; j>=0; j--){
//        // row +=arr[i][j] +" "; 
//          console.log(arr[i][j]);
//     }
//     console.log(row);
// }

// print the matrix rowwise left to right

// for(let row =arr.length-1; row>=0; row--){
//     for(let col =0; col<arr[row].length; col++){
//         console.log(arr[row][col]);
//     }
// }

// matrix 
// let matrix = [
//     [1, 2, 3,4],
//     [5, 6, 7,8],
//     [9, 10, 11,12],
//     [5,4,6,9]
// ];
// // given asquare matrix print the daigonals items 
// for(let i =0; i<matrix.length; i++){    
//     console.log(matrix[i][i]);
// }


let array= [
[3, 7, 5],
[2, 8, 4],
[1, 6, 9]
];

function findMax(array) {
 // return the max value
// do not console.log here
let max = 0;
for(let i =0; i<array.length-1; i++){
  for(let j =0; j<array[i].length-1; j++){
    if(array[i][j] > max){
      max = array[i][j];
    }
}

}
return max;

}