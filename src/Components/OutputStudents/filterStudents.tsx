import React from "react";
import { typeStudentTag } from "../../Helpers/globalTypes"; 
export default function filterStudents(students: typeStudentTag [], Name: string, Tag: string){
  return students.filter((student)=>{
    let conditions = false;
    let fullName = student.firstName.toLowerCase() + " " + student.lastName.toLowerCase();
    if (Name === "" && Tag === ""){
      return student;
    }
  
    if(fullName.includes(Name.toLowerCase())&& Name !== "")
      conditions = true;
    
    student.tags.forEach((value)=>{
      if(value === Tag)
        conditions = true;
    })
    if(conditions === true)
      return student
    return conditions;
  });

}