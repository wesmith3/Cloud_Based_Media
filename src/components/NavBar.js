import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import '../styles/navbar.css'

function NavBar({ style }) {

  return (
    <div className={style ? "navbar" : "menu" }>
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
      <Link to='/projects'>
        <Button className='menu-btn'>
          Projects
        </Button>
      </Link>
      <Link to='/contact'>
        <Button className='menu-btn'>
          Contact
        </Button>
      </Link>
    </div>
  );
}

export default NavBar
