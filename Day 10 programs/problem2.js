
//Problem 2: Use the above function to print the Primes from 2 to a given limit

     let limit=100;

  for(let i=2; i<=limit; i++)
    {
      isPrimeOrNot(i)
    }

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
     console.log(num+"-"+"is a prime number")
   }
   else
   {
     console.log(num+"-"+"is not a prime number")
   }
 }

  
