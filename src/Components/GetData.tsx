import axios from "axios";
import { student } from "../Helpers/globalTypes";

export default async function getData(){
  let studentsArray:Array<student>;
  let result = await axios.get('https://api.hatchways.io/assessment/students');
  studentsArray = result.data.students
  // studentsArray.pop();
  console.log("Retrived Data:", studentsArray);
  return studentsArray;
}