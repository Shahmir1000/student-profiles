export default function TestScores(props: {grades: string[], display: boolean}){

  return (
    <div style={{display: props.display ? "block":"none"}}>
      <br />
      {
        props.grades.map((grade, index)=>
        <p style={{lineHeight: "50%"}}>Test {index +1}: {grade}%</p>)
      }
    </div>
  )
}