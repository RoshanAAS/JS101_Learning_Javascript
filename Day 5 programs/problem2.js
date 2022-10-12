
// Problem 2 : Given a character in lower case print the upper case character


   let char="h";

   let lower_case=["a","b","c","d","e","f","g","h",'i',"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",'y',"z"];

let upper_case=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  for(let i=0; i<lower_case.length; i++)
    {
      if(lower_case[i]==char)
      {
        char=upper_case[i]
      }
    }

   console.log(char)
