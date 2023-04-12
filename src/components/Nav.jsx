
import SearchBar from "./SearchBar";
import {NavLink} from 'react-router-dom'

const Nav= ({onSearch}) => {
  
  return (
    <nav>
       <button className="nav-btn">
        <NavLink className="nav-link" to='/about'>ABOUT</NavLink>
      </button>
      <button className="nav-btn">
        <NavLink className="nav-link" to='/home'>HOME</NavLink>
      </button>
      <NavLink className="nav-link" to='/'>LOG OUT</NavLink>
      <SearchBar onSearch={onSearch}/>
      </nav>
  )
}


export default Nav;