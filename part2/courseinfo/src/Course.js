import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const Course = ({course, parts}) => {
    return(
        <div>
            <Header course={course}/>
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    ) 
}
export default Course