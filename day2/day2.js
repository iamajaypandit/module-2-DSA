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

// let n =5; chech it first
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

let n =5;
for(let row=1; row<=n; row++){
    let str = "";
    for(let col=1; col<=n-row; col++){
        str += " ";
    }
       for(let col=1; col<=2*row-1; col++){
        str += "*";
   }
    console.log(str);
 }