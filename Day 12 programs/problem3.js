
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


  function myslice(arr,a,b){
            let copy_arry=[]

   
      
         for(let i=a; i<=arr.length-1; i++)
         {
            if(a==b)
            {
              break
            }
              copy_arry.push(arr[i])
         }
      
       return copy_arry
    
  }

  console.log(myslice(animals,2,4))
   