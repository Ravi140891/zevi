import React, { useState } from 'react'
import './SearchBar.scss'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const handleSearch = (e:any) => {
        setSearchTerm(e.target.value);
    }

  return (
    <div className="search-wrap">
        <input type="text" placeholder='Search' value={searchTerm} onChange={handleSearch} />
        <i className="fa fa-search"></i>
    </div>
  )
}

export default SearchBar