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
      <Link to='/services'>
        <Button className='menu-btn'>
          Services
        </Button>
      </Link>
      <Link to='/portfolio'>
        <Button className='menu-btn'>
          Portfolio
        </Button>
      </Link>
    </div>
  )
}

export default NavBar
