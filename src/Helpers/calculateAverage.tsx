export default function calculateAverage(grades: string[]): number{
  let sum: number=0;
  grades.forEach((value)=>{
    sum+=Number(value)
  })
  const average = sum / grades.length;
  return Math.round(average * 100)/100;
}
