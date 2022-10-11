 // Given stored username and password and input username and password, Print if the user can login or not.


  let database_user="abcde@gmailcom";

  let database_pass="bcd@123";

  let user="abcde@gmailcom";
  let pass="abcd@123"


   if(database_user==user){
     if(database_pass==pass){
       console.log("You are logged in")
     }else{
       console.log("wrong password")
     }
   }else{
     console.log("your password or user wrong")
   }