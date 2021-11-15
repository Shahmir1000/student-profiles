import {useState, useEffect} from 'react';
import './App.css';
import getData from './Components/GetData';
import { student, typeStudentTag } from './Helpers/globalTypes';
import OutputStudents from './Components/OutputStudents/OutputStudents';
function App() {

const [data, setData] = useState<Array<typeStudentTag>>();

  useEffect(()=>{
    async function fetchData(){
      let result: student[] = await getData();
      setData(result.map((student)=>{
        return{
          ...student,
          tags:[] as string[]
        }
      }))
    }
    fetchData();
  }, []);
  


  return (
    <div className="App">
      <p>{data !== undefined && <OutputStudents students={data} setData={setData}/>}</p>
    </div>
  );
}

export default App;
