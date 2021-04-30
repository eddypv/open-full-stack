const Total = ({parts})=>{
    return <p><strong>Total of {parts.reduce((accum, part) => accum + part.exercises, 0)} exercises</strong></p>
}
export default Total

