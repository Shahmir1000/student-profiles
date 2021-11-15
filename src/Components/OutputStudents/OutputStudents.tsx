import React, { useState } from "react";
import Student from "../Student/Student";
import { student, typeStudentTag } from "../../Helpers/globalTypes";
import "./outputStudents.css"
import filterStudents from "./filterStudents";
export default function OutputStudents(props: { students: typeStudentTag[]; setData: React.Dispatch<React.SetStateAction<typeStudentTag[] | undefined>>}){
  const students: typeStudentTag[] = props.students;
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const addTag = (student: typeStudentTag, tag: string)=>{
    const index = students.indexOf(student);
    students[index].tags.push(tag);
    props.setData(students);
  }
  const studentOutput = ()=>{
    let filteredStudents =  filterStudents(students, name, tag)
    return filteredStudents.map(
      (data: typeStudentTag, index: React.Key | null | undefined)=>
        <Student key={index} data = {data} addTag={addTag}/>
    )
  }
  return(
    <div>
      <input type="text" placeholder="Search By Name" className="searchTerm" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="Search By Tag" className="searchTerm" onChange={(e)=>setTag(e.target.value)}/>
      {studentOutput()}
    </div>
  )
}
