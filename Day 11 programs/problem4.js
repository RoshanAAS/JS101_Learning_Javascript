//Write code to calculate the average of an array
//If there are no items in the array it should return 0
//NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

 let arr=[8,4,8,5,8,5,8,5,]

  function avarage(arr){

    let sum=0;
    let count=0;
    for(let i=0; i<arr.length; i++)
      {
         sum+=arr[i]
        
      }
    return sum;
    
    if(arr.length<0){
      return 0
      }
  }
       let count=0;
   for(let i=0; i<arr.length; i++)
     {
       count++
     }


 let result=avarage(arr)

  console.log(result/count)
