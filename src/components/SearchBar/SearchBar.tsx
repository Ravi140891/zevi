import React, { useState } from 'react'
import './SearchBar.scss'
import Modal from '../Modal/Modal'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [hide, setHide] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSearch = (e:any) => {
        setSearchTerm(e.target.value);
    }

    const handleModal = () =>{
        setHide(true);
    }

    const handleModalHide = () => {
        setHide(false)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        navigate('/search-result');
    }

  return (
        <div className="search-wrap">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search' value={searchTerm} onChange={handleSearch} onFocus={handleModal} onBlur={handleModalHide} />
            <button type="submit"><i className="fa fa-search"></i></button>
            </form>
            {hide && <Modal/>}
        </div>
  )
}

export default SearchBar;
