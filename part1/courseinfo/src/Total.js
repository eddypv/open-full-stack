const Total = (props)=>{
    return <p>Number of exercises {props.parts.reduce((accum, part) => accum + part.exercises, 0)}</p>
}
export default Total

