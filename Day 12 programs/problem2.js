

   const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

      function last(name,search){
        
         let index=-1;
       for(let i=0;i<animals.length;i++){
         
         if(animals[i]=="Tiger"){
           
             index= i;
         }
       }
           return index
      }
  console.log(last(animals , "Penguin"))