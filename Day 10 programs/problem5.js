// Problem 5: Write a function to replace spaces in a given string with - 


  let str="Rahul used to go office every day at 10 am";

       replaceSpace(str)
    function replaceSpace(str){
            let bag="";
      for(let i=0; i<str.length; i++)
        {
          if(str[i]==" ")
          {
            bag+="-"
          }else{
            bag+=str[i]
          }
        }
      console.log(bag)
    }