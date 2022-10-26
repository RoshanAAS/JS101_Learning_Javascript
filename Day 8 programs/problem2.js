

//Problem 2 :
//Given a string print, the number of times each character appears


    let str="character"
     let obj={}
   for(let i=0; i<str.length; i++)
     {
        let x=str[i];

         if(obj[x]==undefined)
         {
           obj[x]=1
         }
       else{
           obj[x]++
       }
     }

  console.log(obj)