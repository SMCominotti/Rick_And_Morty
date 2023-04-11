
import SearchBar from "./SearchBar";
import {NavLink} from 'react-router-dom'

const Nav= ({onSearch}) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch}/>
      <button className="nav-btn">
        <NavLink className="nav-link" to='/about'>ABOUT</NavLink>
      </button>
      <button className="nav-btn">
        <NavLink className="nav-link" to='/home'>HOME</NavLink>
      </button>
      
    </nav>
  )
}


export default Nav;