// ### **Problem-2 Grade Student Marks**

// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// - Sample Input

// ```


// ```

// - Sample Output
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90

let data= [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

  


     function  myfunction(info){

       let max=-Infinity;
       let name;
       let grade;
       for(let i=0; i<info.students.length; i++)
         {
            students_marks=info.students[i]

            let total=students_marks.marks[0]+students_marks.marks[1]+students_marks.marks[2]

             if(total>max)
             {
               max=total
               name=info.students[i].name
               grade=info.grade
             }
           
         }

       console.log(grade+"-"+name+"-"+max)
       
     }

   for(let i=0; i<data.length; i++)
     {
       myfunction(data[i])
     }