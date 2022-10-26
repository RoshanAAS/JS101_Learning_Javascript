// Write a custom function that has the same behavior of inbuilt String Substring Function

// console.log(str.substring(1, 6));
// expected output: "oz"

// console.log(str.substring(2));
// expected output: "zilla"

  const str = 'Mozilla';
  function sUbString(str,a,b)
    {
        let bag="";
        for(let i=a; i<b; i++)
          {
             bag+=str[i]
          }

      return bag
    }

 console.log(sUbString(str,1,6))