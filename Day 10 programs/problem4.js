//Problem 4: Write a function to check if the char is a small case or not

    let char="D";
   checkCase(char)
    function checkCase(char){
       let lower_case="abcdefjhijklmnopqrstuvwxyz";
        let flag=false;
         for(let i=0; i<lower_case.length; i++)
           {
             if(lower_case[i]==char)
             {
               flag=true
             }
           }
      if(flag==true)
      {
        console.log("this is lower case")
      }
      else
      {
        console.log("this is upper case")
      }
    }