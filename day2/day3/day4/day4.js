// let matrix = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]
// //print the matrix column wise
// for (let col = 0; col < matrix[0].length; col++) {
//     for (let row = 0; row < matrix.length; row++) {
//         console.log(matrix[row][col]);
//     }
// }
// for(let col = matrix[0].length-1; col>=0; col--){
//     for(let row =0; row<matrix.length; row++){
//         console.log(matrix[row][col]);
//     }
// }

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12,13],
//     [13,14,15,16]
// ]
//print the irregular  array column wise
// for (let col = 0; col < arr[0].length; col++) {
//     for (let row = 0; row < arr.length; row++) {
//         if(arr[row][col] !== undefined){
//             console.log(arr[row][col]);
//         }
//     }
// } 
//print the irregular  array column wise from right to left
// for (let col = arr[0].length-1; col >= 0; col--) {
//     for (let row = 0; row < arr.length; row++) {    
//         if(arr[row][col] !== undefined){
//             console.log(arr[row][col]);
//         }
//     }
// } 

// let matrix=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]
// print the boundary elements of the matrix
// for(let i =0; i<matrix.length; i++){
//     for(let j =0; j<matrix[i].length; j++){
//         if(i==0 || i==matrix.length-1 || j==0 || j==matrix[i].length-1){
//             console.log(matrix[i][j]);
//         }
//     }
// }

// 1 2 3 4 5 8 9 12 13 14 15 16 
// for(let row =0; row<matrix.length; row++){
//     for(let col =0; col<matrix[row].length; col++){
//         if(row==0 || row==matrix.length-1 || col==0 || col==matrix[row].length-1){
//             console.log(matrix[row][col]);
//         }
//     }
// }

// let matrix = [
//     [1,2,3,4],
//     [5,6,14,8],
//     [9,10,11,12],
//     [13,13,0,9]
// ]
// // find the max value in the matrix
// let max = -Infinity;
// for(let i =0; i<matrix.length; i++){
//     for(let j =0; j<matrix[i].length; j++){
//         if(matrix[i][j] > max){
//             max = matrix[i][j];
//         }
//     }
// }
// console.log("Max value in the matrix:", max);

let matrix = [
    [1,2,3],
    [5,6,14],
    [9,10,11]
]


for(let row =0; row<matrix.length; row++){
    for(let col=0; col<matrix[row].length; col++){
        if(row+col == matrix.length-1)
            console.log(matrix[row][col]);
    }
}


//print the items of the secondary daigonal from bottom to top
for(let row =matrix.length-1; row>=0; row--){
    for(let col=0; col<matrix[row].length; col++){
        if(row+col == matrix.length-1)       
        console.log(matrix[row][col]);
    }
}

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
// let transpose = [
//     [1,4,7,1],
//     [2,5,8,0],
//     [3,6,9,5],
// ]
// for(let row =0; row<transpose.length; row++){
//     for(let col=0; col<transpose[row].length; col++){
//         if(row<col){
//         let temp  = transpose[row][col];
//         transpose[row][col] = transpose[col][row];
//         transpose[col][row] = temp;
//         }
//     }   
// }



