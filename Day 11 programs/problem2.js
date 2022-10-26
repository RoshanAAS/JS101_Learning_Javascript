//Write code to find the absolute difference of two numbers

//Sample Input-1 12,4
//Sample Output-1 8
//Sample Input-2 4,18
//Sample Output-2 14


  function absoluteDiff(a,b){
    
    let diff1=Math.abs(a-b)
    
    return diff1
}

  function findAbsDiff(a,b){
    let diff=Math.abs(a-b);

    return diff
  }
let result1=findAbsDiff(4,18)
let result2=absoluteDiff(12,4);
console.log(result1)
 console.log(result2)
