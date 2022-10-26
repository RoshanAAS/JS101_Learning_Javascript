//Problem 1: Create a function to check if a number is Prime or Not


 function isPrimeOrNot(num){
      let count=0;
   for(let i=1; i<=num; i++)
     {
       if(num%i==0)
       {
         count++
       }
     }
   if(count==2)
   {
     console.log(num,"is a prime number")
   }
   else
   {
     console.log(num,"is not a prime number")
   }
 }

 isPrimeOrNot(13)

   