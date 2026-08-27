let n =5;
for(let i=1; i<=n; i++){
    let str = "";
    for(let j=1; j<=2*(n-i+1)-2; j++)
      str +=" ";
     for(let col = 1; col<=2*i-1; col++) 
        str += "*";
    console.log(str);
  }