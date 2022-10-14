// Problem 1 : Given a string count the number of words in that string;


  let string="Rohan used to school at 10am every day";

             let count=0;
   for(let i=0; i<string.length; i++)
     {
          if(string[i]==" ")
          {
             count++
          }
     }

   if(string.length!=0)
   {
     console.log(count+1)
   }else
   {
     console. log(0)
   }
