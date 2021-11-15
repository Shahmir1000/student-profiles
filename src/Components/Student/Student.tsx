import React, {useState, useEffect} from "react";
import { typeStudentTag } from "../../Helpers/globalTypes";
import TestScores from "../TestScores/TestScores";
import AddTag from "../AddTag/AddTag";
import "./student.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import calculateAverage from "../../Helpers/calculateAverage";
export default function Student (props: {data: typeStudentTag, addTag:(student: typeStudentTag, tag: string)=>void}){
  
  const [state, setState] = useState(false);
  const [newTag, setNewTag] = useState("");

  const handleKeyPress=(e: { key: string; currentTarget: { value: string; }; })=>{
    if(e.key === "Enter"){
      let tag = newTag.trim();
      if(tag !== "" && !props.data.tags.includes(tag)){
        props.addTag(props.data, tag)
      }
      setNewTag("");
      e.currentTarget.value = ""
    }
  }


  return (
    <>
    <div className="student-container">
      {/* <div className="img-container"> */}
        <img src={props.data.pic} alt="" className="student-image"/>
      {/* </div> */}
      <div className="student-info">
        <h1>{props.data.firstName} {props.data.lastName}</h1>
        <section className="info">
          <p>Email: {props.data.email}</p>
          <p>Company: {props.data.company}</p>
          <p>Skills: {props.data.skill}</p>
          <p>Average: {calculateAverage(props.data.grades)}%</p>
          <TestScores display={state} grades={props.data.grades}></TestScores>
          <section className="tags-section">
            <div>
            {props.data.tags.map((tag)=><AddTag tag={tag}/>)}
            </div>
            <input 
              placeholder="Add a tag" 
              type="text" 
              className="addTag" 
              onKeyPress={handleKeyPress}
              onChange={(e)=>setNewTag(e.target.value)}
            />
          </section>
        </section>
      </div>
      <div className="icon">
        <IoIosAdd size="3rem" color="gray" display={state?"none":"block"} onClick={(e)=>setState(true)}></IoIosAdd>
        <IoIosRemove size="3rem" color="gray" display={state?"block":"none"} onClick={(e)=>setState(false)}></IoIosRemove>
      </div>
    </div>
    <hr />
    </>
  )
}