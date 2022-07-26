import {Link} from 'react-router-dom'


export default function Navigation() {
 
  return (
    <div>
      <Link className="links" to="/topics/coding">
            Coding
          </Link>
          <Link className="links" to="/topics/football">
            Football
          </Link>
          <Link className="links" to="/topics/cooking">
            Cooking
          </Link>
          <Link className="links" to="/">
            All Topics
          </Link>
    </div>
  )
}
