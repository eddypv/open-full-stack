const Statistic = ({text, value}) =>{
    return (
        <tr>
        <td>{text}</td>
        <td>{value}</td>
        </tr>
    )
}

const Statistics = ({statistics}) =>{
    if(statistics.good === 0 && statistics.neutral === 0 && statistics.bad === 0 ){
      return (
        <div>
          <h1>Statistics</h1>
          <table>
              <tbody>
                <tr><td>No feedback given</td></tr>
              </tbody>
          </table>
        </div>
      )
    }else{
      return (
        <div>
          <h1>Statistics</h1>
          <table>
            <tbody>
              <Statistic text="Good" value={statistics.good} />
              <Statistic text="Neutral" value={statistics.neutral} />
              <Statistic text="Bad" value={statistics.bad} />
              <Statistic text="All" value={statistics.all} />
              <Statistic text="Average" value={statistics.average} />
              <Statistic text="Positive" value={statistics.positive} />
            </tbody>
          </table>
        </div>
      )
    }
  }
export default Statistics