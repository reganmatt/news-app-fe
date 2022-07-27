import {useContext} from 'react'
import {UserContext} from './UserContext'
import { Navbar, NavDropdown } from 'react-bootstrap'
import { Link }from 'react-router-dom'

function Header() {
  const {user} = useContext(UserContext)
  return (
    <header className='header'>
      <h1>NC News</h1>
      <div className='dropDown-menu'>
        <Navbar bg='light' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
      <NavDropdown id='Nav-Login' title={user.username.length === 0 ? 'Log in/Sign up' : `${user.username}`} >
      <Link to="/login">Log in/Sign up</Link>
      <p className='logoutText' >Logout </p>
      </NavDropdown>
        </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  )
}

export default Header