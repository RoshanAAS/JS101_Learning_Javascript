// Problem 2: Print Prime Numbers from 1 to given limit;;;

  for(let j=1;j<=50; j++){
  
let count=0

  for(let i=1; i<=j; i++)
    {
      if(j%i==0)
      {
        count++
      }
    }
if(count==2)
{
  console.log(j+"this prime number")
}else{
  console.log(j+"this is not prime nubmer")
}
    
  }