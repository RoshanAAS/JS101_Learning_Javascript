// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


  let arr=["MA", "SA", "I", "SCH", "OOL"]
  let str="ROSHAN"


  function convertLower(char){
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";

     for(let i=0; i<upper.length; i++)
       {
         if(upper[i]==char)
         {
           return lower[i]
         }
       }

  }

    function convertWordtoLower(str){
         let bag=""
       for(let i=0; i<str.length; i++)
         {
          let res= convertLower(str[i])

            bag+=res
         }
      return bag
    }
  

   function convertArrayToLower(arr){
         let newarr=[]
       for(let i=0; i<arr.length; i++)
         {
          let res= convertWordtoLower(arr[i])

            newarr.push(res)
         }
     return newarr
   }

  console.log(convertArrayToLower(arr))