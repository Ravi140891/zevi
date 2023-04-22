import React from "react";
import "./Layout.scss";
import SearchBar from "../SearchBar/SearchBar";

const Layout = () => {
  return (
    <div className="layout">
      <h2 className="logo">zevi</h2>
      <div className="search-wrapper">
        <SearchBar />
      </div>
    </div>
  );
};

export default Layout;
