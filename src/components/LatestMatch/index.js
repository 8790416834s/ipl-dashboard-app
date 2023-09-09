import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    umpires,
    result,
    id,
    date,
    venue,
    manOfTheMatch,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestDetails
  return (
    <div className="latest-match-container">
      <div className="head-section">
        <p>{firstInnings}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="sub-logo-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="sub-logo"
        />
      </div>
      <div className="innings-container">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpire</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
