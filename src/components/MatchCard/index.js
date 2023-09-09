import './index.css'

const MatchCard = props => {
  const {recentDetails} = props
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
  } = recentDetails
  console.log(recentDetails)
  return (
    <li className="match-card-container">
      <div>
        <img src={competingTeamLogo} alt={competingTeam} />
        <p>{firstInnings}</p>
        <p>{secondInnings}</p>
        <p>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
