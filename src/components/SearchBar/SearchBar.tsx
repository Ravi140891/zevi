import React, { useState } from 'react'
import './SearchBar.scss'
import Modal from '../Modal/Modal'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [hide, setHide] = useState<boolean>(false)
    const handleSearch = (e:any) => {
        setSearchTerm(e.target.value);
    }

    const handleModal = () =>{
        setHide(true);
    }

    const handleModalHide = () => {
        setHide(false)
    }

  return (
        <div className="search-wrap">
            <input type="text" placeholder='Search' value={searchTerm} onChange={handleSearch} onFocus={handleModal} onBlur={handleModalHide} />
            <i className="fa fa-search"></i>
            {hide && <Modal/>}
        </div>
  )
}

export default SearchBar;