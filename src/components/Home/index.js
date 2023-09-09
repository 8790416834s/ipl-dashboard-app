import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {blogData: []}

  componentDidMount() {
    this.homeDetails()
  }

  homeDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({blogData: updatedData})
  }

  render() {
    const {blogData} = this.state
    return (
      <div className="home-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="list-container">
          {blogData.map(each => (
            <TeamCard blogData={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
