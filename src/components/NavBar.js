import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function NavBar() {
  return (
    <div>
      <Link to='/'>
        <Button className='menu-btn'>
          Home
        </Button>
      </Link>
      <Link to='/about'>
        <Button className='menu-btn'>
          About Us
        </Button>
      </Link>
    </div>
  )
}

export default NavBar
