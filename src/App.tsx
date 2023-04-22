import React from 'react';
import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom'
import SearchResult from './components/SearchResult/SearchResult';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/search-result' element={<SearchResult/>}/>
      </Routes>
    </div>
  );
}

export default App;
