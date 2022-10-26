// Write a custom function that has the same behavior of inbuilt Array Includes Function//



  function myincludes(arr,search){

        for(let i=0; i<arr.length; i++)
      {
        if(search==arr[i])
        {
          return true
        }
        else 
        {
          return false
        }
       
      }
  }
   let pets = ['cat', 'dog', 'bat'];
console.log(myincludes(pets,'cat'))