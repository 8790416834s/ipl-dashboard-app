import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {blogsData: '', latest: '', recent: ''}

  componentDidMount() {
    this.matchDetails()
  }

  matchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches} = updatedData

    const latestMatch = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const recentMatch = recentMatches.map(each => ({
      id: each.id,
      umpire: each.umpire,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      blogsData: updatedData,
      latest: latestMatch,
      recent: recentMatch,
    })
  }

  render() {
    const {blogsData, latest, recent} = this.state
    const {teamBannerUrl} = blogsData
    console.log(recent)
    return (
      <div className="team-matches-container">
        <div>
          <img src={teamBannerUrl} alt="team banner" />
        </div>
        <p className="sub-heading">Latest Match</p>
        <div>
          <LatestMatch latestDetails={latest} />
        </div>
        <ul>
          {recent.map(each => (
            <MatchCard recentDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
