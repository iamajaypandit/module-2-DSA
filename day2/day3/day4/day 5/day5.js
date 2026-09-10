// let mat = [
//     [1,2,3],
//     [5,6,14],
//     [9,10,11]
// ]
// // print the transpose of the matrix
// for(let row =0; row<mat.length; row++){
//     for(let col=0; col<mat[row].length; col++){
//         if(row<col){
//         let temp  = mat[row][col];
//         mat[row][col] = mat[col][row];
//         mat[col][row] = temp;
//         }
//     }
// }   
//  console.log(mat);
// what if matrix is square 
// let mat = [
//     [1,4,7,1],
//     [2,5,8,0],
//     [3,6,9,5],
// ]
// let transpose = [];

//     for(let col=0; col<mat[0].length; col++){ 
//         let colsItems=[];
//         for(let row=0; row<mat.length; row++){
//             colsItems.push(mat[row][col]);
//         }
//         transpose.push(colsItems);
//     }
//     console.log(transpose);

    // rotate matrix cloxkwise by 90 degree 
    // rotate matrix
    // zig zag traversal 

    // boundary traversal 
    // let mat = [
    //     [1,4,7,1],
    //     [2,5,8,0],
    //     [3,6,9,5]
    // ]

// let result = [];
// let top = 0;
// let bottom = mat.length - 1;
// let left = 0;
// let right = mat[0].length - 1;

// // 1. Top row: left to right
// for (let j = left; j <= right; j++) {
//   result.push(mat[top][j]);
// }

// // 2. Right column: top+1 to bottom
// for (let i = top + 1; i <= bottom; i++) {
//   result.push(mat[i][right]);
// }

// // 3. Bottom row: right-1 down to left
// for (let j = right - 1; j >= left; j--) {
//   result.push(mat[bottom][j]);
// }

// // 4. Left column: bottom-1 up to top+1
// for (let i = bottom - 1; i > top; i--) {
//   result.push(mat[i][left]);
// }

// console.log(result.join(" "));

// approach 2

// let result = [];
// let top = 0;
// let bottom = mat.length - 1;
// let left = 0;
// let right = mat[0].length - 1;
// // left to right for two rows
// for(let k =left; k<=right; k++){
//     console.log(mat[top][k]);
// }
// top++;
// // top to bottom for right col
// for(let k =top; k<=bottom; k++){
//     console.log(mat[k][right]);
// }
// right--;
// // right to left for bottom row 
// for(let k=right; k>=left; k--){
//   console.log(mat[bottom][k]);
// }
// bottom--;
// // bottom to top for left col
// for(let k=bottom; k>=top; k--){
//     console.log(mat[k][left]);
// }
// left++;

// hw spiral matrix


// subarrays or substrings 

//let arr = [1,2,3,4];
// part of the array 
// item should be continuously (skip not allowed)
// order precedence 
// find all the subarray of length 2

// let k =2; 
//   for(let i =0; i<arr.length-k+1; i++){
//     let subarray=[];
//   for(let j =i; j<i+k; j++){
//     subarray.push(arr[j]);
//   }
//   console.log(subarray);
//   }

// given a string find all the substring of length k 
//   let str = "Akash";
//   let k=2;
//   for(let i =0; i<str.length-k+1; i++){
//     let subarray=[];
//   for(let j =i; j<i+k; j++){
//     subarray.push(str[j]);
//   }
//   console.log(subarray);
//   }

//   // find all the total no of the subarraya and print them 
//   let arr = [1,2,3,4,5];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     let subarray = [];
//   for (let j = i; j <arr.length; j++) {
//      subarray.push(arr[j]);
//     console.log(subarray);
//     count++;
//   }
// }

// console.log("Total number of subarrays:", count);



//spiral matrix
 let mat = [
    [1,2,3,4,5],
    [5,6,14,7,3],
    [9,7,11,13,53],
    [4,56,32,54,22]
]


let result = [];
let top = 0;
let bottom = mat.length - 1;
let left = 0;
let right = mat[0].length - 1;

while (top <= bottom && left <= right) {

    // left to right
    for (let k = left; k <= right; k++) {
        console.log(mat[top][k]);
    }
    top++;

    // top to bottom
    for (let k = top; k <= bottom; k++) {
        console.log(mat[k][right]);
    }
    right--;

    // right to left
    for (let k = right; k >= left; k--) {
        console.log(mat[bottom][k]);
    }
    bottom--;

    // bottom to top
    for (let k = bottom; k >= top; k--) {
        console.log(mat[k][left]);
    }
    left++;
}

// zig zag matrix

// let mat= [
// [7,2,3],
// [2 ,3, 4],
// [5 ,6, 1]
// ]
// let result = [];
// let top = 0;
// let bottom = mat.length - 1;
// let left = 0;
// let right = mat[0].length - 1;

// while (top <= bottom) {

//     // left to right
//     for (let k = left; k <= right; k++) {
//         result.push(mat[top][k]);
//     }
//     top++;

//     // right to left
//     if (top <= bottom) {
//         for (let k = right; k >= left; k--) {
//             result.push(mat[top][k]);
//         }
//         top++;
//     }
// }

// console.log(result.join(" "));



