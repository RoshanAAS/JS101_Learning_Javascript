// Problem 3: Print a box patterns using *
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********


    let num=10;

      for(let farm=1; farm<=num; farm++)
        {
          let bag=""
       for(let seed=1; seed<=num; seed++)
         {
            if(farm==10 || farm==1){
                bag+="*"
            }
           else{
              if(seed==1 || seed==10){
                 bag+="*"
              }else{
                 bag+=" "
              }
           }

         }
       console.log(bag)
     }


   

 