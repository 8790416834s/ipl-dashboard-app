import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {blogData} = props
  const {id, name, teamImageUrl} = blogData
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-item">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
