import SearchBar from "./SearchBar";

const Nav= ({onSearch}) => { // las props llegan por aca
      return(
            <nav>
            <SearchBar onSearch={onSearch}/>
                </nav>
        )
}


export default Nav;