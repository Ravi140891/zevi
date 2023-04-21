import React from 'react'
import './Layout.scss'
import SearchBar from '../SearchBar/SearchBar'

const Layout = () => {
  return (
    <div className='layout'>
        <h2 className='logo'>zevi</h2>
        <SearchBar/>
    </div>
  )
}

export default Layout