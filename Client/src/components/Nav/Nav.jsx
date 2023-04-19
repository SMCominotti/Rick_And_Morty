
import SearchBar from "../Search/SearchBar";
import {NavLink} from 'react-router-dom'
import './Nav.css'

const Nav= ({onSearch}) => {
  
  return (
    <nav>
       <button className="nav-btn">
        <NavLink className="nav-link" to='/about'>ABOUT</NavLink>
      </button>
      <button className="nav-btn">
        <NavLink className="nav-link" to='/home'>HOME</NavLink>
      </button>
      <button className="nav-btn">
      <NavLink className="nav-link" to='/favorites'> FAVORITES </NavLink>
      </button>
      <button className="logOut">
      <NavLink className="nav-link" to='/'>LOG OUT</NavLink>
      </button>
      <SearchBar onSearch={onSearch}/>
      </nav>
  )
}


export default Nav;