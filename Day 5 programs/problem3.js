
 // Problem 3 : Given an array of numbers find the average of all the even numbers.

    let array=[6,85,8,5,7,4,5,8,9,52,1,2,];

   let sum=0;
    let count=0;

   for(let i=0; i<array.length; i++)
     {
       if(array[i]%2==0)
       {
         count++
          sum+=array[i]
       }
     }


  let average=sum/count;

   console.log(average)