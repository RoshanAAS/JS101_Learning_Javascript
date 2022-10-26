//Problem 1. Write a custom function that has the same behavior of inbuilt Array Join






  function myjoin(arr)
    {
      let bag=""

      for(let i=0; i<arr.length; i++)
        {
          bag+=arr[i]
        }
      console.log(bag)
    }

 
  let elements = ['Fire', 'Air', 'Water'];

    myjoin(elements)