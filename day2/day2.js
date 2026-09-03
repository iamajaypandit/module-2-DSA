// let n = 4;
// for(let row =1; row<=n; row++){
//     let str = "";
//     for(col=1; col<=n; col++){
//         str+=" ";
//     }
//   for(let col =1; col<=2*(n-row+1)-2; col++){
//     str+="*";
//   }
//   console.log(str);
// }

// let n =5;
// for(let i=1; i<=n; i++){
//     let str = "";
//     for(let j=1; j<=2*(n-i+1)-2; j++)
//       str +=" ";
//      for(let col = 1; col<=2*i-1; col++) 
//         str += "*";
//     console.log(str);
//   }
// op=
//         *
//       ***
//     *****
//   *******
// *********

// let n =5; 
// for(let i=1; i>=n; i++){
//     let str = "";
//     for(let j=1; j>=2*(i-1); j++){
//       str +=" ";
//     }
//      for(let col = 1; col>=2*(i+1); col++) {
//         str += "*";
//      }
//     console.log(str);
//   }
// let n = 5;
// for (let i = 1; i <= n; i++) { 
//     let str = "";
    
//     // Spaces Loop   
//     for (let j = 1; j <= 2 * (i - 1); j++) { 
//         str += " ";
//     }
    
//     // Stars Loop (9, 7, 5, 3, 1)
//     for (let col = 1; col <= 2 * (n - i + 1) - 1; col++) { 
//         str += "*";
//     }
    
//     console.log(str);
// }
// *********
//   *******
//     *****
//       ***
//         *
// let n = 5;
// for (let row= 1; row<= n; row++) { 
//     let str = "";
    
//     // Spaces Loop
//     for (let col=1; col<= 2*row-2;col++) { 
//         str += " ";
//     }
    
//     // Stars Loop (8,6,4,2)
//     for (let col=1; col <= 2*(n-row+ 1); col++) { 
//         str += "*";
//     }
    
//     console.log(str);
// }

// let n =5;
// for(let row =1; row<=n; row++){
//     let count ="";
//     for(let col =1; col<=row; col++){
//         count+=col;
//     }
//     console.log(count);
// }
// 1
// 12
// 123
// 1234
// 12345

// let n =5;
// for(let row =1; row<=n; row++){
//     let str ="";
//     for(let col =1; col<=row; col++){
//         str+=String.fromCharCode(65+(col-1));
//     }
//     console.log(str);
// }

// let n =5;
// for(let row=1; row<=n; row++){
//     let str = "";+

//     for(let col=1; col<=n-row; col++){
//         str += " ";
//     }
//        for(let col=1; col<=2*row-1; col++){
//         str += "*";
//    }
//     console.log(str);
//  }

//  function diamond(n){
//     for(let i =1; i<=n; i++){
//         let spaces = " ".repeat(n-i);
//         let stars="* ".repeat(i);
//         console.log(spaces + stars);
//     }
//     for(let i =n-1; i>=1; i--){
//         let spaces =" ".repeat(n - i);
//         let stars ="* ".repeat(i);
//         console.log(spaces + stars);
//     }
//  }
//  diamond(5);
// let n =5;
// for(let row =1; row<=n; row++){
//     let str ="";
//     for(let col = 1; col<=n; col++){
//         str="*";
//     }
//     console.log(str);
// }


// question 22
// let n =5; 
// for(row=1; row<=n; row++){
//     let str ="";
//     for(col=1; col<=row; col++){
//         str+=col+" ";
//     }
//     console.log(str);
// }
//   



//  QUSETION 24 repeated numbers
// let n =5;
// for(row=1; row<=n; row++){
//     let str ="";
//     for(col=1; col<=row; col++){
//         str+=row+" "
//     }
//     console.log(str);
// }

// Questiion 25
// centered pyramid
// let n =5;
// for(row=1; row<=n; row++){
//     let str ="";
//  for(col=1; col<=n; col++){
//    if(col<=n-row)  str+=" ";
//    else str+="*";
//  }
//  console.log(str);
// }

// Question 26
// contunious numbers / Floyd's triangle
// let n =5; 
// let num = 1;
// for(row=1; row<=n; row++){
//     let str="";
//     for(col=1; col<=row; col++){
//         str+= num + " ";
//         num++;
//     }
//     console.log(str);
// }

// Question 27
// centerde pyramid 
// let n =5;
// for(row=1; row<=n; row++){
//     let str ="";
// for(col=1; col<=n; col++){
//     if(col<=n-row) str+=" ";
//     else str+="*";
// }
// console.log(str);
// }

// Question 28
// Hallow Square 
// let n =10;
// for(row=1; row<=n; row++){
//     let str ="";
//     for(col=1; col<=n; col++){
//         if(row===1 || row===n || col===1 || col===n){
//             str+="*";
//         }
//         else{
//             str+=" ";
//         }
//     }
//     console.log(str);
// }

// question 29
// Print Daimond 
// let n =5; 
// for(let row =1; row<=n; row++){
//     let str ="";
// for(let col =1; col<=n;  col++){
//     if(col<=n-row) str +=" ";
//     else  str +="*";
// }
// console.log(str);
//}
// let n =5;
// for(row=1; row<=n; row++){
//     let str ="";
//     for(col=1; col<=n; col++){
//         if(row===1 || row===n || col===1 || col===n){
//             str+="*";
//         }
//         else{
//             str+=" ";
//         }
//     }
//     console.log(str);
// }


// // print butterfly pattern
// let n =5; 
// for(let i =1; i<=n; i++){
//     let row ="";
//     for(let j =1; j<=i; j++){
//         row +="*";
//     }
//     let spaces = 2*(n-i);
//     for(let j =1; j<=spaces; j++){
// row +=" ";
//     }
//     for(let j =1; j<=i; j++){
//         row+="*";
//     }
//     console.log(row);
// }
// for(let i =n; i>=1; i--){
//     let row ="";
//     for(let j =1; j<=i; j++){
//         row +="*";
//     }
//     let spaces = 2*(n-i);
//     for(let j =1; j<=spaces; j++){
// row +=" ";
//     }
//     for(let j =1; j<=i; j++){
//         row+="*";
//     }
//     console.log(row);
// }



// // 2D aaray 
// // arr[row][col]

// // let arr =[
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9]
// // ]

// // print no ofcolumns and rows
// // let rows = arr.length;
// // let cols = arr[0].length;
// // console.log("Rows:", rows);// console.log(arr.lengtrh);
// // console.log("Columns:", cols);


// // irregular 2d arrays
// // let arr = [
// //     [1,2,3,4],
// //     [2,3,4,5,6,10],
// //     [7,8,9,10,11]
// // ]

// console.log(arr);
// console.log(arr[1][4]); //3
// print all the iems of the array
// for(let i =0; i<arr.length; i++){
//     for(let j =0; j<arr[i].length; j++){
//         console.log(arr[i][j]," ",j);
//        // console.log(arr[i][j]);
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

// print the 2d array rowwise right to left

// for (let i = 0; i < arr.length; i++){
//     let row ="";
//     for(let j = arr[i].length -1; j>=0; j--){
//         row +=arr[i][j] +" "; // console.log(arr[i][j]);
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


// // print the secondary diagonal items
// for(let i =0; i<matrix.length; i++){
//     console.log(matrix[i][matrix.length-1-i]);
// }