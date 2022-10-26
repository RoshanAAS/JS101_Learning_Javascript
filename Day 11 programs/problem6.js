// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

   let str="Test";

   function swapCase(char){
     let lower="abcdefghijklmnopqrstuvwxyz";
     let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

       for(let i=0; i<lower.length; i++)
         {
           if(lower[i]==char)
           {
             return upper[i]
           }
           else if(upper[i]==char)
           {
             return lower[i]
           }
         }
   }

  function swapWord(str){
      let bag="";

    for(let i=0; i<str.length; i++)
      {
       let res=  swapCase(str[i])

         bag+=res
      }
    return bag
  }

 let result=swapWord(str)
console.log(result)
